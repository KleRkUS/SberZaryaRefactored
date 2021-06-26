export type RouteBlock = {
    img:string,
    title:string,
    icon:string,
    link:string
}

export type RegularAchievements = {
    id:number,
    title:string,
    description:string,
    img:string
}
    
export type AchievementState = {
    allState:boolean,
    userState:boolean,
    userAchievements:Array<number>,
    allAchievements: Array<RegularAchievements>
}

export type AchievementSelectorState = {
    achievements:AchievementState
}
    
export type BrushingState = {
    ongoingBrushing:boolean,
    time:number
}

export type BrushingSelectorState = {
    brushing:BrushingState
}

export type HistoryPart = {
    title:string,
    subTitle:string
}