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
