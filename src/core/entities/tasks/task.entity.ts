
export interface Task {
    id: number
    title: string
    description: string
    state: string
    projectId: number
    userId: number
}


export interface List {
    state: string
    tasks: Task[]
}