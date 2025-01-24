interface ApiResponse {
  title: string;
  hdurl: string;
  explanation: string;
}

interface Props {
  handleToggleModal: () => void;
  data: ApiResponse;
}

export default function SideBar({ handleToggleModal, data }: Props) {
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">Description</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
      </div>
    </div>
  );
}
