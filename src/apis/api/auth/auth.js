import {instance} from "../../utils/instance";

export const authPostSendEmail = async (data) => {
    const response = await instance.post('/user/sendmail', data);
    return response.data;
}

export const authPostEmailCheck = async (data) => {
    const response = await instance.post('/user/mailcheck', data);
    return response.data;
}

export const authPostSignUp = async (data) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("name", data.name);
    formData.append("nickname", data.nickname);
    formData.append("areaId", data.areaId);
    formData.append("grade", data.grade);
    formData.append("profileImg", data.profileImg);

    // 파일을 첨부하는 부분 (조건부 파일 첨부)
    if (data.proveImg) {
        formData.append("proveImg", data.proveImg);  // proveImgUrl은 File 객체여야 함
    }

    // FormData를 콘솔에 출력하여 데이터 확인
    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }

    // `axios`는 자동으로 'multipart/form-data'로 설정되므로, headers에서 `Content-Type`을 지정하지 않음.
    const response = await instance.post('/user/signup', formData);

    return response.data;
}
