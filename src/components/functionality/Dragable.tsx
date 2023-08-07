import { ReactNode } from "react"



interface Props {
    children: ReactNode,
    courseLocation: string
}


const Dragable:React.FC<Props> = (props) => {

    const mouseDownEvent = (e:React.MouseEvent<HTMLDivElement>) => {
        console.log(props.courseLocation)
    }

    const mouseUpEvent = (e:React.MouseEvent<HTMLDivElement>) => {
        console.log(props.courseLocation)
    }

  return (
    <div
    onMouseDown={mouseDownEvent} onMouseUp={mouseUpEvent}>
        {props.children}
    </div>
  )
}

export default Dragable