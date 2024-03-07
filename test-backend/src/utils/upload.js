import multer from "multer";
const validExt = ["png", "jpg", "jpeg"];
function uploadFile(location, fieldName) {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, location);
    },
    filename: function (req, file, cb) {
      // return console.log(file)
      const { originalname, mimetype } = file;
      let mimeArr = mimetype.split("/");
      let ext = mimeArr[mimeArr.length - 1];

      if (!validExt.includes(ext)) {
        return cb(new Error("Please Choose Valid Image"));
      }
      cb(null, `${Date.now()}-${Math.floor(Math.random() * 100000000)}.${ext}`);
    },
  });

  return multer({ storage }).single(fieldName);
}

export { uploadFile };
