import React, { useState } from "react";
import {
    Container, InputContainer, Header, ImageUploadWrapper, IconButton,
    BackButton, GiftButton, UploadedImage,
    InputField, ToggleButton, GameToggleButton,
    TextAreaField, SubmitButton, TitleContainer,
    BtnContainer
} from "./style";
import { createPost } from "../../../apis/trading";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/Trading/Modal/Register/RegisterModalComponent";
import GiftconModal from "../../../components/Trading/Modal/Register/Giftcon/GiftconModalComponent"; // GiftconModal import

const TradingRegisterPage = () => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [isGame, setIsGame] = useState(false);
    const [selectGame, setSelectGame] = useState(true);
    const [price, setPrice] = useState("");
    const [drawParticipants, setDrawParticipants] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [isSuccess, setIsSuccess] = useState(false); // 성공 상태
    const [isError, setIsError] = useState(false); // 실패 상태
    const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 내용
    const [giftconData, setGiftconData] = useState([]); // 기프티콘 데이터
    const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);

    const navigate = useNavigate();

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
            if (response.staus == 200) {
                setIsSuccess(true); // 성공 상태 설정
            } else {
                setErrorMessage("게시글 등록에 실패했습니다. 다시 시도해주세요.");
                setIsError(true); // 실패 상태 설정
            }
            console.log("서버 응답:", response);
        } catch (error) {
            setErrorMessage("게시글 등록에 실패했습니다. 다시 시도해주세요.");
            setIsError(true); // 실패 상태 설정
        }
    };

    const handleGiftcon = () => {
        // 임의의 기프티콘 데이터 설정
        const mockData = [
            {
                imageUrl: "https://via.placeholder.com/100",
                name: "스타벅스 아메리카노",
                description: "스타벅스 아메리카노 기프티콘입니다.",
            },
            {
                imageUrl: "https://via.placeholder.com/100",
                name: "CU 편의점 상품권",
                description: "CU 편의점에서 사용 가능한 기프티콘입니다.",
            },
            {
                imageUrl: "https://via.placeholder.com/100",
                name: "맥도날드 불고기버거 세트",
                description: "맥도날드에서 사용 가능한 기프티콘입니다.",
            },
        ];

        setGiftconData(mockData); // 기프티콘 데이터 상태 업데이트
        setIsGiftModalOpen(true); // 모달 열기
    };

    const handleBackBtn = () => {
        navigate("/trading");
    }

    const handleGiftModalClose = () => {
        setIsGiftModalOpen(false); // 모달 닫기
    };

    const handleSelectGiftcon = (giftcon) => {
        setTitle(giftcon.name); // 제목에 기프티콘 이름 설정
        setDescription(giftcon.description); // 설명에 기프티콘 설명 설정
        setIsGiftModalOpen(false); // 모달 닫기
    };

    const handleSuccessConfirm = () => {
        setIsSuccess(false); // 성공 모달 닫기
        navigate("/trading"); // 페이지 이동
    };

    const handleErrorConfirm = () => {
        setIsError(false); // 에러 모달 닫기
    };


    return (
        <Container>
            <Header>
                <BackButton onClick={handleBackBtn}>&times;</BackButton>

                <GiftButton onClick={handleGiftcon}>내 기프티콘</GiftButton>
            </Header>

            <InputContainer>
                <span style={{
                    textAlign: "center",
                    fontSize: "18px",
                    width: "100%",
                    height: "5vh",
                    marginBottom: "5px",
                }}>내 물건 팔기</span>
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
                        <div>📷</div>
                        <div>{uploadedImages.length}/10</div>
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

            </InputContainer>

            <BtnContainer>
                <SubmitButton onClick={handleSubmit}>작성 완료</SubmitButton>
            </BtnContainer>

            {/* 성공 모달 */}
            {isSuccess && (
                <Modal
                    message="게시글이 성공적으로 등록되었습니다!"
                    onConfirm={handleSuccessConfirm}
                />
            )}

            {/* 실패 모달 */}
            {isError && (
                <Modal
                    message={errorMessage}
                    onConfirm={handleErrorConfirm}
                />
            )}

            {/* 기프티콘 모달 */}
            {isGiftModalOpen && (
                <GiftconModal
                    giftconData={giftconData}
                    onClose={handleGiftModalClose}
                    onSelectGiftcon={handleSelectGiftcon} // 선택된 기프티콘 처리
                />
            )}
        </Container>
    );
};

export default TradingRegisterPage;
