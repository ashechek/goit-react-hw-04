// ------------------------------------------------------------------------- imports
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Modal from "react-modal";
import searchImagesForTopic from "./search-img-api.js";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useState } from "react";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
// ------------------------------------------------------------------------- consts
const App = () => {
  const [serverData, setServerData] = useState([]);
  const [loader, setIsLoader] = useState(false);
  const [error, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  Modal.setAppElement("#root");
  const openModal = (imageUrl) => {
    setCurrentImage(imageUrl);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };
  const submitFu = async (newTopic) => {
    try {
      setPage(1);
      setIsError(false);
      setIsLoader(true);
      setTopic(newTopic);
      const data = await searchImagesForTopic(newTopic, 1);
      setServerData(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoader(false);
    }
  };
  const loadMoreFu = async () => {
    try {
      setIsLoader(true);
      const nextPage = page + 1;
      const data = await searchImagesForTopic(topic, nextPage);
      setPage(nextPage);
      setServerData((prev) => [...prev, ...data]);
    } catch {
      setIsError(true);
    } finally {
      setIsLoader(false);
    }
  };
  return (
    <>
      <SearchBar onSubmit={submitFu} />
      <Toaster />
      {serverData.length > 0 && (
        <ImageGallery galleryList={serverData} openModalFu={openModal} />
      )}
      {serverData.length > 0 && !loader && (
        <LoadMoreBtn loadMoreFu={loadMoreFu} />
      )}
      {error && <ErrorMessage />}
      {loader && <Loader />}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          currentImage={currentImage}
        />)}</>);
};
export default App;