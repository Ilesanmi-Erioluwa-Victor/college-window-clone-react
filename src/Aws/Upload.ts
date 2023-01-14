import aws from "aws-sdk";
window.Buffer = window.Buffer || require("buffer").Buffer;

aws.config.update({
  region: "us-east-1",
  accessKeyId: process.env.REACT_APP_AWSKEY,
  secretAccessKey: process.env.REACT_APP_AWS_ACCESS_KEY,
});

const s3 = new aws.S3();

const upload = async (key:any, data:any) => {
  await s3
    .putObject({
      Bucket: "college-profile-imgs",
      Key: key,
      Body: Buffer.from(data, "base64"),
      ContentType: "image/*",
    })
    .promise()
    .catch((err) => {
      console.log(err.message);
    });
  return {
    url: `https://college-profile-imgs.s3.amazonaws.com/${key}`,
    name: key,
  };
};

export default upload;
