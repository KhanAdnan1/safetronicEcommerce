import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addFeatureImage, getFeatureImages } from "@/store/common-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFeatureImage } from "@/store/common-slice";
import { useToast } from "@/components/ui/use-toast";


function AdminDashboard() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const { toast } = useToast();

  console.log(uploadedImageUrl, "uploadedImageUrl");

  function handleUploadFeatureImage() {
    dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
      if (data?.payload?.success) {
        dispatch(getFeatureImages());
        setImageFile(null);
        setUploadedImageUrl("");
        toast({
          title: "Success",
          description: "Image uploaded successfully",
          variant: "default", // or "success"
        });
      }
    });
  }

  function handleDeleteImage(id) {
    dispatch(deleteFeatureImage(id)).then((data) => {
      if (data?.payload?.success) {
        dispatch(getFeatureImages());
         
        toast({
          title: "Success",
          description: "Image deleted successfully",
          variant: "default", // or "success" if you've set up custom variants
        });
      }

    });
  }


  useEffect(() => {

    dispatch(getFeatureImages());
  }, [dispatch]);
  
  console.log(featureImageList, "featureImageList");

  return (
    <div>
      <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        setImageLoadingState={setImageLoadingState}
        imageLoadingState={imageLoadingState}
        isCustomStyling={true}
      // isEditMode={currentEditedId !== null}
      />
      <Button onClick={handleUploadFeatureImage}
        className="mt-5 w-full"
        disabled={!imageFile || imageLoadingState}>
        Upload

      </Button>

      <div className="flex flex-col gap-4 mt-5">
        {/* {featureImageList && featureImageList.length > 0
          ? featureImageList.map((featureImgItem) => (
            <div className="relative">
              <img
                src={featureImgItem.image}
                className="w-full h-[300px] object-cover rounded-t-lg"
              />
            </div>
          ))
          : null} */}

        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((featureImgItem) => (
            <div
              key={featureImgItem._id}
              className="w-full max-w-md mx-auto border rounded-lg overflow-hidden shadow"
            >
              <img
                src={featureImgItem.image}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-3 bg-gray-100 flex justify-center">
                <Button
                  onClick={() => handleDeleteImage(featureImgItem._id)}  // Passing the correct ID
                  className="bg-red-600 text-white hover:bg-red-700 w-full"
                >
                  Delete
                </Button>

              </div>
            </div>
          ))
          : null}

      </div>
    </div>
  );
}

export default AdminDashboard;
