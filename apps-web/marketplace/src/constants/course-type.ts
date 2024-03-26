import {
  IconDefinition,
  faFilm,
  faPersonChalkboard,
  faSignalStream,
} from '@fortawesome/pro-regular-svg-icons'
import {
  faFilm as faFilmSolid,
  faPersonChalkboard as faPersonChalkboardSolid,
  faSignalStream as faSignalStreamSolid,
} from '@fortawesome/pro-solid-svg-icons'

import { LiveCourseType } from '@luminate/database'

export const courseTypeIcon: Record<LiveCourseType, IconDefinition> = {
  [LiveCourseType.LIVE]: faSignalStream,
  [LiveCourseType.FUSION]: faPersonChalkboard,
  [LiveCourseType.TAPE]: faFilm,
  [LiveCourseType.ONSITE]: faPersonChalkboard,
}

export const courseTypeIconSolid: Record<LiveCourseType, IconDefinition> = {
  [LiveCourseType.LIVE]: faSignalStreamSolid,
  [LiveCourseType.FUSION]: faPersonChalkboardSolid,
  [LiveCourseType.TAPE]: faFilmSolid,
  [LiveCourseType.ONSITE]: faPersonChalkboardSolid,
}

export const courseTypeText: Record<LiveCourseType, string> = {
  [LiveCourseType.LIVE]: 'Live',
  [LiveCourseType.FUSION]: 'Fusion',
  [LiveCourseType.TAPE]: 'Online',
  [LiveCourseType.ONSITE]: 'On-site',
}
