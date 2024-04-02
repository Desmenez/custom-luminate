import { Children, PropsWithChildren, useId, useState } from "react";

import { reactQueryClient } from "@app/core/services";
import { faCircleChevronDown } from "@fortawesome/pro-solid-svg-icons";

import { BasePlanType, LiveCourseType } from "@luminate/database";
import {
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  FontAwesomeIcon,
  Label,
} from "@luminate/ui";

import { Grade } from "../constants";
import { UseQueryParamArrayResult } from "../hooks";

export interface FiltersProps {
  liveCourseType: UseQueryParamArrayResult<LiveCourseType>["value"];
  liveCourseTypeHandler: UseQueryParamArrayResult<LiveCourseType>["handler"];
  grades: UseQueryParamArrayResult<Grade>["value"];
  gradesHandler: UseQueryParamArrayResult<Grade>["handler"];
  basePlanTypes: UseQueryParamArrayResult<BasePlanType>["value"];
  basePlanTypesHandler: UseQueryParamArrayResult<BasePlanType>["handler"];
  subjectIds: UseQueryParamArrayResult<string>["value"];
  subjectIdsHandler: UseQueryParamArrayResult<string>["handler"];
  tutorIds: UseQueryParamArrayResult<string>["value"];
  tutorIdsHandler: UseQueryParamArrayResult<string>["handler"];
}

export const Filters = (props: FiltersProps) => {
  const { data: tutors } = reactQueryClient.tutor.getTutors.useQuery([
    "tutors",
  ]);
  const { data: subjects } = reactQueryClient.subject.getSubjects.useQuery([
    "subjects",
  ]);

  console.log("tutors in real real", tutors);
  console.log("tutorIds in checkbox", props.tutorIds);

  return (
    <>
      <CollapsibleFilter label="รูปแบบการเรียนการสอน">
        <FilterCheckbox
          label="ระบบถ่ายทอดสด (Live streaming)"
          value={LiveCourseType.LIVE}
          array={props.liveCourseType}
          arrayHandler={props.liveCourseTypeHandler}
        />
        <FilterCheckbox
          label="เรียนออนไลน์ (Online Course)"
          value={LiveCourseType.TAPE}
          array={props.liveCourseType}
          arrayHandler={props.liveCourseTypeHandler}
        />
        <FilterCheckbox
          label="เรียนสดที่ห้องเรียน (On-site)"
          value={LiveCourseType.ONSITE}
          array={props.liveCourseType}
          arrayHandler={props.liveCourseTypeHandler}
        />
      </CollapsibleFilter>

      <CollapsibleFilter label="ระดับการศึกษา">
        <FilterCheckbox
          label="ประถม"
          value={Grade.ELEMENTARY}
          array={props.grades}
          arrayHandler={props.gradesHandler}
        />
        <FilterCheckbox
          label="มัธยมต้น"
          value={Grade.MIDDLE_SCHOOL}
          array={props.grades}
          arrayHandler={props.gradesHandler}
        />
        <FilterCheckbox
          label="มัธยมปลาย"
          value={Grade.HIGH_SCHOOL}
          array={props.grades}
          arrayHandler={props.gradesHandler}
        />
      </CollapsibleFilter>

      <CollapsibleFilter label="จุดประสงค์">
        <FilterCheckbox
          label="ปรับพื้นฐาน"
          value={BasePlanType.FOUNDATION}
          array={props.basePlanTypes}
          arrayHandler={props.basePlanTypesHandler}
        />
        <FilterCheckbox
          label="เนื้อหา"
          value={BasePlanType.CORE}
          array={props.basePlanTypes}
          arrayHandler={props.basePlanTypesHandler}
        />
        <FilterCheckbox
          label="เตรียมสอบ"
          value={BasePlanType.ENTRANCE}
          array={props.basePlanTypes}
          arrayHandler={props.basePlanTypesHandler}
        />
        <FilterCheckbox
          label="สอบ O-NET"
          value={BasePlanType.ONET}
          array={props.basePlanTypes}
          arrayHandler={props.basePlanTypesHandler}
        />
        <FilterCheckbox
          label="สอวน."
          value={BasePlanType.POSN}
          array={props.basePlanTypes}
          arrayHandler={props.basePlanTypesHandler}
        />
      </CollapsibleFilter>

      {subjects && (
        <CollapsibleFilter label="วิชา">
          {subjects.body.map((subject) => (
            <FilterCheckbox
              key={subject!.id}
              label={subject!.name}
              value={subject!.id}
              array={props.subjectIds}
              arrayHandler={props.subjectIdsHandler}
            />
          ))}
        </CollapsibleFilter>
      )}

      {tutors && (
        <CollapsibleFilter label="ติวเตอร์">
          {tutors.body.map((tutor) => (
            <FilterCheckbox
              key={tutor!.id}
              label={tutor!.name}
              value={tutor!.id}
              array={props.tutorIds}
              arrayHandler={props.tutorIdsHandler}
            />
          ))}
        </CollapsibleFilter>
      )}
    </>
  );
};

const CollapsibleFilter = ({
  children,
  label,
}: PropsWithChildren<{ label: string }>) => {
  const count = Children.count(children);
  const collapsible = count > 3;
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex flex-col gap-2.5">
        {collapsible ? (
          <CollapsibleTrigger className="flex justify-between items-center [&[data-state=open]>svg]:rotate-180">
            <span className="font-semibold my-1">{label}</span>
            <FontAwesomeIcon
              icon={faCircleChevronDown}
              className="w-5 h-5 transition-transform"
            />
          </CollapsibleTrigger>
        ) : (
          <span className="font-semibold my-1">{label}</span>
        )}
        {Children.toArray(children).slice(0, 3)}
        {collapsible && (
          <CollapsibleContent>
            <div className="flex flex-col gap-2.5 ">
              {Children.toArray(children).slice(3)}
            </div>
          </CollapsibleContent>
        )}
      </div>
    </Collapsible>
  );
};

interface FilterCheckboxProps<T extends string>
  extends React.ComponentPropsWithoutRef<typeof Checkbox> {
  label: string;
  value: T;
  array: UseQueryParamArrayResult<T>["value"];
  arrayHandler: UseQueryParamArrayResult<T>["handler"];
}

const FilterCheckbox = <T extends string>({
  label,
  value,
  array,
  arrayHandler,
  ...props
}: FilterCheckboxProps<T>) => {
  const id = useId();
  return (
    <label className="flex items-center gap-2 cursor-pointer" htmlFor={id}>
      <Checkbox
        id={id}
        checked={array.includes(value)}
        onCheckedChange={(checked) => {
          if (checked) {
            arrayHandler.push(value);
          } else {
            arrayHandler.remove(value);
          }
        }}
        {...props}
      />
      <Label className="text-sm cursor-pointer" htmlFor={id}>
        {label}
      </Label>
    </label>
  );
};
