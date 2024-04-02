import { useEffect, useMemo, useState } from "react";

import MonkeyCry from "@app/assets/monkey-cry.svg?url";
import { DefaultHoverCard } from "@app/components/course-card";
import { envClient } from "@app/core/env/client";
import { reactQueryClient } from "@app/core/services";
import { useLoadingStatus } from "@app/utils/loading";
import { faBarsFilter, faSearch } from "@fortawesome/pro-regular-svg-icons";
import { faSort } from "@fortawesome/pro-solid-svg-icons";
import NextImage from "next/image";
import { useRouter } from "next/router";

import { BasePlanType, LiveCourseType } from "@luminate/database";
import { CustomNextPage } from "@luminate/nextjs";
import { useDebounce } from "@luminate/react-hooks";
import { BreadcrumbJsonLd, NextSeo } from "@luminate/seo";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  FontAwesomeIcon,
  Input,
  InputGroup,
  InputLeftIcon,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@luminate/ui";

import { Filters } from "./components/filters";
import { BrowseSort, Grade } from "./constants";
import { useQueryParamArray, useQueryParamValue } from "./hooks";

const BrowsePage: CustomNextPage = () => {
  const router = useRouter();

  const { value: name, set: setName } = useQueryParamValue("name");

  const { value: select, set: setSelect } = useQueryParamValue<BrowseSort>(
    "select",
    BrowseSort.POPULARITY
  );

  const { value: liveCourseType, handler: liveCourseTypeHandler } =
    useQueryParamArray<LiveCourseType>("liveCourseType");
  const { value: grades, handler: gradesHandler } =
    useQueryParamArray<Grade>("grades");
  const { value: basePlanTypes, handler: basePlanTypesHandler } =
    useQueryParamArray<BasePlanType>("basePlanTypesType");
  const { value: subjectIds, handler: subjectIdsHandler } =
    useQueryParamArray("subjectIds");
  const { value: tutorIds, handler: tutorIdsHandler } =
    useQueryParamArray("tutorIds");

  console.log("tutorIds", tutorIds);
  console.log("tutorIdsHandler", tutorIdsHandler);

  const clearFilter = () => {
    router.replace({
      pathname: router.pathname,
      query: {},
    });
  };

  const orderBy = useMemo(() => {
    switch (select) {
      case BrowseSort.POPULARITY:
        // TODO: uncomment this
        return undefined;
      // return { popularity: 'desc' } as const
      case BrowseSort.START_DESC:
        return { startDate: "desc" } as const;
      case BrowseSort.START_ASC:
        return { startDate: "asc" } as const;
      case BrowseSort.PRICE_DESC:
        return { price: "desc" } as const;
      case BrowseSort.PRICE_ASC:
        return { price: "asc" } as const;
      default:
        undefined;
    }
  }, [select]);

  const where = useMemo(() => {
    const shouldAddFusionType =
      liveCourseType.includes(LiveCourseType.LIVE) ||
      liveCourseType.includes(LiveCourseType.ONSITE);
    const computedLiveCourseType = [
      ...liveCourseType,
      ...(shouldAddFusionType ? [LiveCourseType.FUSION] : []),
    ];
    const computedGrades = [
      ...(grades.includes(Grade.ELEMENTARY) ? [1, 2, 3, 4, 5, 6] : []),
      ...(grades.includes(Grade.MIDDLE_SCHOOL) ? [7, 8, 9] : []),
      ...(grades.includes(Grade.HIGH_SCHOOL) ? [10, 11, 12] : []),
    ];
    return {
      name: name || undefined,
      liveCourseType:
        computedLiveCourseType.length > 0 ? computedLiveCourseType : undefined,
      grades: computedGrades.length > 0 ? computedGrades : undefined,
      basePlanTypes: basePlanTypes.length > 0 ? basePlanTypes : undefined,
      subjectIds: subjectIds.length > 0 ? subjectIds : undefined,
      tutorIds: tutorIds.length > 0 ? tutorIds : undefined,
    };
  }, [name, liveCourseType, grades, basePlanTypes, subjectIds, tutorIds]);

  const { data, isFetching } =
    reactQueryClient.liveCourse.getLiveCourses.useQuery(
      { query: { where, orderBy } },
      { cacheTime: 0, keepPreviousData: true }
    );
  useLoadingStatus(isFetching);

  const FilterSection = (
    <Filters
      liveCourseType={liveCourseType}
      liveCourseTypeHandler={liveCourseTypeHandler}
      grades={grades}
      gradesHandler={gradesHandler}
      basePlanTypes={basePlanTypes}
      basePlanTypesHandler={basePlanTypesHandler}
      subjectIds={subjectIds}
      subjectIdsHandler={subjectIdsHandler}
      tutorIds={tutorIds}
      tutorIdsHandler={tutorIdsHandler}
    />
  );

  return (
    <>
      <NextSeo title="ค้นหาคอร์ส" />
      <BreadcrumbJsonLd
        itemListElements={
          data?.body.slice(0, 5).map((courseData, index) => {
            return {
              item: `${envClient.NEXT_PUBLIC_BASE_PATH}/course/${courseData.id}`,
              name: courseData.name,
              position: index + 1,
            };
          }) ?? []
        }
      />
      <div className="container flex flex-col md:flex-row md:gap-6 py-6 md:py-10 flex-1">
        <section className="sticky top-[calc(24px+var(--navbar))] md:top-[calc(40px+var(--navbar))] hidden md:w-[314px] md:flex flex-col gap-4 self-start max-h-[calc(100vh-var(--navbar)-80px)] overflow-y-auto hide-scrollbar">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faSort}
              className="w-3 h-3 md:w-4 md:h-4 mr-1"
            />
            <label className="mr-2 whitespace-nowrap">เรียงตาม</label>
            <Select
              value={select}
              onValueChange={(value) => setSelect(value as BrowseSort)}
            >
              <SelectTrigger className="ml-auto w-full max-w-[200px] [&>span]:line-clamp-1">
                <SelectValue placeholder="ยอดนิยม" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={BrowseSort.POPULARITY}>ยอดนิยม</SelectItem>
                <SelectItem value={BrowseSort.START_DESC}>
                  วันเริ่มคอร์ส ก่อน-หลัง
                </SelectItem>
                <SelectItem value={BrowseSort.START_ASC}>
                  วันเริ่มคอร์ส หลัง-ก่อน
                </SelectItem>
                <SelectItem value={BrowseSort.PRICE_DESC}>
                  ราคา มาก-น้อย
                </SelectItem>
                <SelectItem value={BrowseSort.PRICE_ASC}>
                  ราคา น้อย-มาก
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBarsFilter} className="w-3 h-3 mr-1" />
              <label className="whitespace-nowrap">ตัวกรอง</label>
            </div>
            <Button variant="ghost" onClick={clearFilter}>
              ล้างทั้งหมด
            </Button>
          </div>

          {FilterSection}
        </section>
        <section className="w-full flex flex-col flex-1">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-center md:text-left">
            ค้นหาชื่อคอร์ส
          </h1>
          <SearchInput value={name} setValue={setName} />

          <div className="flex md:hidden flex-col gap-2 mt-4">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faSort}
                className="w-3 h-3 md:w-4 md:h-4 mr-1"
              />
              <label className="mr-2 whitespace-nowrap">เรียงตาม</label>
            </div>
            <div className="flex gap-2">
              <Select
                value={select}
                onValueChange={(value) => setSelect(value as BrowseSort)}
              >
                <SelectTrigger className="flex-1 [&>span]:line-clamp-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={BrowseSort.POPULARITY}>ยอดนิยม</SelectItem>
                  <SelectItem value={BrowseSort.START_DESC}>
                    วันเริ่มคอร์ส ก่อน-หลัง
                  </SelectItem>
                  <SelectItem value={BrowseSort.START_ASC}>
                    วันเริ่มคอร์ส หลัง-ก่อน
                  </SelectItem>
                  <SelectItem value={BrowseSort.PRICE_DESC}>
                    ราคา มาก-น้อย
                  </SelectItem>
                  <SelectItem value={BrowseSort.PRICE_ASC}>
                    ราคา น้อย-มาก
                  </SelectItem>
                </SelectContent>
              </Select>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    leftIcon={
                      <FontAwesomeIcon
                        icon={faBarsFilter}
                        className="w-4 h-4"
                      />
                    }
                  >
                    ตัวกรอง
                  </Button>
                </DialogTrigger>
                <DialogContent fullPage>
                  <DialogHeader>
                    <DialogTitle>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FontAwesomeIcon
                            icon={faBarsFilter}
                            className="w-4 h-4 mr-1"
                          />
                          <label className="whitespace-nowrap">ตัวกรอง</label>
                        </div>
                        <Button variant="ghost">ล้างทั้งหมด</Button>
                      </div>
                    </DialogTitle>
                  </DialogHeader>
                  <section className="container flex flex-col gap-4">
                    {FilterSection}
                  </section>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        fullWidth
                        variant="outline"
                        leftIcon={
                          <FontAwesomeIcon
                            icon={faSearch}
                            className="h-4 w-4"
                          />
                        }
                      >
                        แสดงผลลัพธ์
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {!data ? (
            <SkeletonCards />
          ) : data.body.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              {data.body.map((courseData) => (
                <DefaultHoverCard
                  key={courseData.id}
                  courseData={courseData}
                  responsive
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

interface SearchInputProps {
  value: string;
  setValue: (value: string) => void;
}

const SearchInput = ({ value, setValue }: SearchInputProps) => {
  const [searchInput, setSearchInput] = useState(value);
  const debouncedValue = useDebounce(searchInput, 300);
  useEffect(() => {
    if (debouncedValue !== undefined && value !== debouncedValue) {
      setValue(debouncedValue);
    }
  }, [debouncedValue, setValue, value]);
  useEffect(() => {
    setSearchInput(value);
  }, [value]);
  return (
    <InputGroup>
      <InputLeftIcon>
        <FontAwesomeIcon icon={faSearch} className="h-4 w-4" />
      </InputLeftIcon>
      <Input
        placeholder="ค้นหาคอร์ส"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </InputGroup>
  );
};

const SkeletonCards = () => {
  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          className="aspect-[3/4] bg-accent rounded-lg animate-pulse"
          key={index}
        />
      ))}
      <div className="aspect-[3/4] bg-accent rounded-lg animate-pulse hidden sm:block" />
      <div className="aspect-[3/4] bg-accent rounded-lg animate-pulse md:hidden lg:block" />
      <div className="aspect-[3/4] bg-accent rounded-lg animate-pulse hidden xl:block" />
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className="flex flex-col flex-1 items-center mt-48">
      <NextImage
        src={MonkeyCry}
        width={123}
        height={112}
        alt="monkey cry"
        className="mb-2"
      />
      <p className="text-xl font-semibold">ไม่พบรายการ</p>
      <p className="text-gray-300">น้องๆสามารถค้นหาด้วยคำค้นหาอื่นๆ</p>
    </div>
  );
};

BrowsePage.hideFooter = true;

export default BrowsePage;
