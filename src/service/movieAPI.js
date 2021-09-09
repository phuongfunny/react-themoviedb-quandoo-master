import axiosClient from "../api/axiosClient";

const movieAPI = {
  getAll: (data) => {
    const url = "/popular";
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
      page: data,
    };
    return axiosClient.get(url, { params });
  },
  getDetailMovie: (data) => {
    const url = `/${data}`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
    };
    return axiosClient.get(url, { params });
  },
  getProvider: (data) => {
    const url = `/${data}/watch/providers`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
    };
    return axiosClient.get(url, { params });
  },
  getPeople: (data) => {
    const url = `/${data}/credits`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
      language: "en-US",
    };
    return axiosClient.get(url, { params });
  },
  getReviewMovie: (data) => {
    const url = `/${data}/reviews`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
      language: "en-US",
      page: 1,
    };
    return axiosClient.get(url, { params });
  },
  getKeyWordMovie: (data) => {
    const url = `/${data}/keywords`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
    };
    return axiosClient.get(url, { params });
  },
  getRecommendations: (data) => {
    const url = `/${data}/recommendations`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
      language: "en-US",
      page: 1,
    };
    return axiosClient.get(url, { params });
  },
  getAllVideos: (data) => {
    const url = `/${data}/videos`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
      language: "en-US",
    };
    return axiosClient.get(url, { params });
  },
  getAllImages: (data) => {
    const url = `/${data}/images`;
    const params = {
      api_key: "80654656c6586a0c705642639595a994",
    };
    return axiosClient.get(url, { params });
  },
};
export default movieAPI;
