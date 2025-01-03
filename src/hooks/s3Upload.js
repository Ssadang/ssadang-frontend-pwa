import AWS from 'aws-sdk';

AWS.config.update({
    region: process.env.REACT_APP_S3_REGION,
    accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_S3_SECRET_KEY,
});

export const s3Upload = async (file) => {
    // 파일 포맷 (확장자)
    const fileFormat = file.name.split('.').reverse()[0];

    // 파일의 MIME 타입을 지정
    const contentType = file.type;

    // S3 업로드 설정
    const uploadParams = {
        Bucket: process.env.REACT_APP_S3_BUCKET_NAME, // 버킷 이름
        Key: `${Date.now()}-${file.name}`, // 파일명 (현재 시간을 포함하여 중복 방지)
        Body: file, // 업로드할 파일
        ContentType: contentType, // MIME 타입
        ACL: 'public-read', // 파일 공개 설정
    };

    console.log(uploadParams)

    // S3 객체 생성
    const s3 = new AWS.S3();

    try {
        // 파일 업로드
        const data = await s3.upload(uploadParams).promise();
        alert('파일이 정상적으로 업로드 되었습니다.');
        console.log('파일 업로드 성공:', data);
        return data; // 업로드한 파일 정보 반환 (URL 포함)
    } catch (err) {
        alert('파일 업로드에 실패하였습니다. 다시 해당 서비스를 이용해주세요.');
        console.error('파일 업로드 실패:', err);
        throw err; // 에러 처리
    }
}