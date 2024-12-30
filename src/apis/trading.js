import axios from "axios";

// 게시글 등록 API 호출
export const createPost = async (formData) => {
    try {
        const response = await axios.post("/api/posts", formData, {
            headers: {
                "Content-Type": "multipart/form-data", // 파일 업로드 시 필요
            },
        });
        return response.data;
    } catch (error) {
        console.error("게시글 등록 실패:", error);
        throw error;
    }
};


// 기프티콘 호출 (게시물 등록)

export const fetchGiftcons = async () => {
    try {
        const response = await axios.get("/api/giftcon"); // 백엔드 API 요청
        return response.data; // 데이터를 반환
    } catch (error) {
        throw new Error("기프티콘 데이터를 불러오는 데 실패했습니다."); // 에러 처리
    }
};