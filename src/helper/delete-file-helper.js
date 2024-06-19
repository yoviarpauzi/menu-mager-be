import fs from "fs/promises";

const deleteFileHelper = async (filename) => {
  const filePath = `./public/${filename}`;
  await fs.unlink(filePath);
};

export default deleteFileHelper;
