interface ApiResponse {
  title: string;
  hdurl: string;
}

interface Props {
  data?: ApiResponse;
}

export default function Main({ data }: Props) {
  return (
    <div className="imgContainer">
      <img src={data?.hdurl} alt="the night sky" className="bgImage"></img>
    </div>
  );
}
