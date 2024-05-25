import { FormikValues } from "formik";
import { UseLocationType } from "../hooks/useLocation";
import { ListingEditType } from "../models/listing";

const { default: client } = require("./client");

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const getMyListings = () => client.get(`${endpoint}/user`);

// -title
// -price
// -categoryId
// -description
// -location
// ‘images’, {  name: ‘unique name’,  type: ‘image/jpeg’, uri: ‘uri of the image on the device’ };

const postListing = async (
  { form, location }: { form: ListingEditType; location: UseLocationType },
  onUploadProgress: (progress: number) => void
) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("price", form.price);
  data.append("categoryId", form.category.value);
  data.append("description", form.description);

  if (location) {
    data.append("location", JSON.stringify(location));
  }

  form.images.forEach((value, i) => {
    const formDataImage = {
      name: `image-${i}`,
      type: "image/jpeg",
      uri: value,
    } as any;

    return data.append("images", formDataImage);
  });

  return client.post(endpoint, data, {
    onUploadProgress: (progress: any) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

export default {
  getListings,
  postListing,
  getMyListings,
};
