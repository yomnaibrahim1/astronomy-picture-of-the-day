interface ApiResponse {
  title: string;
  hdurl: string;
}

interface Props {
  handleToggleModal: () => void;
  data?: ApiResponse;
}

export default function Footer({ handleToggleModal, data }: Props) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>APOD Project</h1>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
