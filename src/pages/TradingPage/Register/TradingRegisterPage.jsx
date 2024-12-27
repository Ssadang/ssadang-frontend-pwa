import React, { useState } from "react";
import {
    Container, Header, ImageUploadWrapper, IconButton,
    BackButton, UploadedImage,
    InputField, ToggleButton, GameToggleButton,
    TextAreaField, SubmitButton, TitleContainer,
    BtnContainer
} from "./style";
import { createPost } from "../../../apis/trading";

const TradingRegisterPage = () => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [isGame, setIsGame] = useState(false);
    const [selectGame, setSelectGame] = useState(true);
    const [price, setPrice] = useState("");
    const [drawParticipants, setDrawParticipants] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");

    const handleImageUpload = (event) => {
        const files = event.target.files;
        if (files.length + uploadedImages.length > 10) {
            alert("최대 10장의 이미지만 업로드 가능합니다.");
            return;
        }

        const newImages = Array.from(files).map((file) => file);
        setUploadedImages((prev) => [...prev, ...newImages]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("location", location);
        formData.append("isGame", isGame);
        formData.append("price", isGame ? 0 : price);
        formData.append("drawParticipants", isGame && selectGame ? drawParticipants : null);

        // 이미지 파일 추가
        uploadedImages.forEach((file, index) => {
            formData.append("images", file); // 서버와의 필드 이름은 "images"로 통일
        });

        try {
            const response = await createPost(formData);
            alert("게시글 등록 성공!");
            console.log("서버 응답:", response);
        } catch (error) {
            alert("게시글 등록 실패");
        }
    };

    return (
        <Container>
            <Header>
                <BackButton>&times;</BackButton>
                <span>내 물건 팔기</span>
                <BackButton></BackButton>
            </Header>

            <ImageUploadWrapper>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    style={{ display: "none" }}
                    id="fileInput"
                    onChange={handleImageUpload}
                />

                <IconButton htmlFor="fileInput">
                    📷 {uploadedImages.length}/10
                </IconButton>

                {uploadedImages.map((src, index) => (
                    <UploadedImage key={index} src={URL.createObjectURL(src)} alt={`uploaded ${index}`} />
                ))}
            </ImageUploadWrapper>
            <TitleContainer><h4>제목</h4></TitleContainer>
            <InputField
                type="text"
                placeholder="제목을 입력하세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <ToggleButton>
                <GameToggleButton
                    active={!isGame}
                    onClick={() => {
                        setIsGame(false);
                        setPrice("");
                    }}
                >
                    판매하기
                </GameToggleButton>
                <GameToggleButton
                    active={isGame}
                    onClick={() => {
                        setIsGame(true);
                        setPrice("무료 나눔");
                    }}
                >
                    나눔하기
                </GameToggleButton>
            </ToggleButton>
            <TitleContainer><h4>거래방식</h4></TitleContainer>
            <InputField
                type="text"
                placeholder="가격을 입력하세요.(원)"
                disabled={isGame}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{
                    backgroundColor: isGame ? "#ccc" : "#fff",
                }}
            />

            {isGame && (
                <>
                    <InputField
                        type="text"
                        placeholder="추첨 인원수를 입력하세요."
                        disabled={!selectGame}
                        value={selectGame ? drawParticipants : ""}
                        onChange={(e) => setDrawParticipants(e.target.value)}
                        style={{
                            backgroundColor: selectGame ? "#fff" : "#ccc",
                        }}
                    />
                    <ToggleButton
                        style={{ flexDirection: "column" }}
                    >
                        <GameToggleButton
                            active={selectGame}
                            onClick={() => setSelectGame(true)}
                        >
                            YES
                        </GameToggleButton>
                        <GameToggleButton
                            active={!selectGame}
                            onClick={() => setSelectGame(false)}
                        >
                            NO
                        </GameToggleButton>
                    </ToggleButton>
                </>
            )}

            <TitleContainer><h4>자세한 설명</h4></TitleContainer>
            <TextAreaField
                rows="4"
                placeholder="자세한 설명을 입력하세요."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <TitleContainer><h4>거래 희망 장소</h4></TitleContainer>
            <InputField
                type="text"
                placeholder="거래 희망 장소를 입력하세요."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <BtnContainer>
                <SubmitButton onClick={handleSubmit}>작성 완료</SubmitButton>
            </BtnContainer>

        </Container>
    );
};

export default TradingRegisterPage;
