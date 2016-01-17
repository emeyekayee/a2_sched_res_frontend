// Interface for a_time_block
export interface ResourceTimeBlock {
  rsrc: any,
  blk: any
}

export interface GeoHash {
  left: string,
  width: string
}

export interface Meta {
  t1: number,
  t2: number,
  visible_time?: number
}

export interface ResponseData {
  meta: Meta
}
