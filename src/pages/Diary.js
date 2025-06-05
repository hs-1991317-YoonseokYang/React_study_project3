import { useParams } from "react-router-dom";

const Diary = () => {
    const {id} = useParams();

    return <div>{id}번의 Diary 페이지입니다.</div>
}
export default Diary;