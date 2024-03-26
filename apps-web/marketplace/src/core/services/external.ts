import { UseQueryOptions, useQuery } from '@tanstack/react-query'

export interface ThaiAddress {
  id: number
  provinceCode: number
  provinceNameEn: string
  provinceNameTh: string
  districtCode: number
  districtNameEn: string
  districtNameTh: string
  subdistrictCode: number
  subdistrictNameEn: string
  subdistrictNameTh: string
  postalCode: number
}

export const externalService = {
  getAllThaiAddresses(): Promise<ThaiAddress[]> {
    return fetch(
      'https://raw.githubusercontent.com/thailand-geography-data/thailand-geography-json/main/src/geography.json'
    ).then((res) => res.json())
  },
  useQueryGetAllThaiAddresses(
    options?: Omit<UseQueryOptions<ThaiAddress[]>, 'queryKey' | 'queryFn' | 'initialData'>
  ) {
    return useQuery(['thai-addresses'], this.getAllThaiAddresses, options)
  },
}
