import React from 'react';
import './SkinCareQuiz.css';

import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdQuiz } from 'react-icons/md';

import Modal from '../../Component/Modal/Modal';

import skinCareQuiz from '../../Assets/Images/skinCareImage.jpg';

// Questions
import Question1 from './Questions/Question1';
import Question2 from './Questions/Question2';
import Question3 from './Questions/Question3';
import Question4 from './Questions/Question4';
import Question5 from './Questions/Question5';
import Question6 from './Questions/Question6';

export default function SkinCareQuiz() {
  const [nextQuestion, setNextQuestion] = React.useState(1);

  const handleQA = (questionNumber) => {
    setNextQuestion(questionNumber);
  };

  return (
    <div className="skinCareQuiz-Section flex flex-col">
      <div className="flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]">
        <Link to="/">
          <AiFillHome className="cursor-pointer" />
        </Link>
        <p className="cursor-default">Skin Care Quiz</p>
      </div>

      <div className="skinCareQuiz-main flex flex-row items-center p-[2rem] gap-[2rem] w-full">
        <img
          className="skinCareQuiz-main-left w-[50%]"
          src={skinCareQuiz}
          alt="skinCareImage"
        />
        <div className="skinCareQuiz-main-right w-[50%] flex flex-col gap-[1rem] items-center">
          <p className="text-[40px] font-[500]">Take A Quiz</p>
          <p className="text-gray-600 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            velit consequatur amet quis incidunt, illum recusandae eveniet neque
            debitis, vero voluptate accusantium optio libero maxime eos nihil,
            quasi quidem. Modi.{' '}
          </p>
          <Modal
            submitHide={'hidden'}
            button={
              <button className="skinCareQuiz-main-modalBTN bg-black rounded-[4px] text-white py-[1rem] px-[1rem] border-2 border-solid border-black hover:bg-white hover:text-black transition duration-[0.5s] ease-in-out">
                Start Quiz
              </button>
            }
            content={
              <div className="skinCareQuiz-main-modal-content w-[700px]">
                <div className="skinCareQuiz-main-modal-content-head p-[1rem] bg-black text-white flex flex-row gap-[1rem] items-center">
                  <p className="text-[25px]">Take A Quiz</p>
                  <MdQuiz className="text-[25px]" />
                </div>

                <div className="skinCareQuiz-main-modal-content-quiz flex flex-col gap-[1rem] items-center p-[1rem]">
                  <div className="w-[80%] flex flex-row gap-[10px] justify-center">
                    <div
                      className={`rounded-full border-2 border-black border-solid w-[40px] h-[40px] flex flex-row justify-center items-center ${
                        nextQuestion === 1 && 'bg-black text-white'
                      }`}
                    >
                      <p>1</p>
                    </div>
                    <div
                      className={`rounded-full border-2 border-black border-solid w-[40px] h-[40px] flex flex-row justify-center items-center ${
                        nextQuestion === 2 && 'bg-black text-white'
                      }`}
                    >
                      <p>2</p>
                    </div>
                    <div
                      className={`rounded-full border-2 border-black border-solid w-[40px] h-[40px] flex flex-row justify-center items-center ${
                        nextQuestion === 3 && 'bg-black text-white'
                      }`}
                    >
                      <p>3</p>
                    </div>
                    <div
                      className={`rounded-full border-2 border-black border-solid w-[40px] h-[40px] flex flex-row justify-center items-center ${
                        nextQuestion === 4 && 'bg-black text-white'
                      }`}
                    >
                      <p>4</p>
                    </div>
                    <div
                      className={`rounded-full border-2 border-black border-solid w-[40px] h-[40px] flex flex-row justify-center items-center ${
                        nextQuestion === 5 && 'bg-black text-white'
                      }`}
                    >
                      <p>5</p>
                    </div>
                    <div
                      className={`rounded-full border-2 border-black border-solid w-[40px] h-[40px] flex flex-row justify-center items-center ${
                        nextQuestion === 6 && 'bg-black text-white'
                      }`}
                    >
                      <p>6</p>
                    </div>
                    <div
                      className={`rounded-full border-2 border-black border-solid w-[40px] h-[40px] flex flex-row justify-center items-center ${
                        nextQuestion === 7 && 'bg-black text-white'
                      }`}
                    >
                      <p>7</p>
                    </div>
                  </div>

                  {nextQuestion === 1 && (
                    <div className="skinCareQuiz-main-modal-content-quiz-QA items-center flex flex-col gap-[1rem]">
                      <p className="text-[25px]">How Old Are You ?</p>
                      <Question1 />
                      <button
                        onClick={() => handleQA(2)}
                        className="skinCareQuiz-main-modal-content-quiz-QA-btn py-[1rem] px-[2rem] bg-black text-white hover:text-black hover:bg-white border-2 border-solid border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit"
                      >
                        Next
                      </button>
                    </div>
                  )}

                  {nextQuestion === 2 && (
                    <div className="skinCareQuiz-main-modal-content-quiz-QA items-center flex flex-col gap-[10px]">
                      <p className="text-[25px]">What’s Your Skin Concern ?</p>
                      <Question2 />
                      <div className="skinCareQuiz-main-modal-content-quiz-QA-btns flex flex-row gap-[1rem]">
                        <button
                          onClick={() => handleQA(1)}
                          className="skinCareQuiz-main-modal-content-quiz-QA-btn py-[1rem] px-[2rem]  text-black border-2 border-solid border-transparent hover:border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => handleQA(3)}
                          className="skinCareQuiz-main-modal-content-quiz-QA-btn py-[1rem] px-[2rem] bg-black text-white hover:text-black hover:bg-white border-2 border-solid border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {nextQuestion === 3 && (
                    <div className="skinCareQuiz-main-modal-content-quiz-QA items-center flex flex-col gap-[1rem]">
                      <p className="text-[25px]">Are You Pregnant ?</p>
                      <Question3 />
                      <div className="skinCareQuiz-main-modal-content-quiz-QA-btns flex flex-row gap-[1rem]">
                        <button
                          onClick={() => handleQA(2)}
                          className="skinCareQuiz-main-modal-content-quiz-QA-btn py-[1rem] px-[2rem]  text-black border-2 border-solid border-transparent hover:border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => handleQA(4)}
                          className="skinCareQuiz-main-modal-content-quiz-QA-btn py-[1rem] px-[2rem] bg-black text-white hover:text-black hover:bg-white border-2 border-solid border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {nextQuestion === 4 && (
                    <div className="skinCareQuiz-main-modal-content-quiz-QA items-center flex flex-col gap-[1rem]">
                      <p className="text-[25px]">
                        Do You Prefer A Face Oil Or Cream Moisturizer ?
                      </p>
                      <Question4 />
                      <div className="skinCareQuiz-main-modal-content-quiz-QA-btns flex flex-row gap-[1rem]">
                        <button
                          onClick={() => handleQA(3)}
                          className="skinCareQuiz-main-modal-content-quiz-QA-btn py-[1rem] px-[2rem]  text-black border-2 border-solid border-transparent hover:border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => handleQA(5)}
                          className="skinCareQuiz-main-modal-content-quiz-QA-btn py-[1rem] px-[2rem] bg-black text-white hover:text-black hover:bg-white border-2 border-solid border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {nextQuestion === 5 && (
                    <div className="skinCareQuiz-main-modal-content-quiz-QA items-center flex flex-col gap-[1rem]">
                      <p className="text-[25px]">Do You Wear Makeup ?</p>
                      <Question5 />
                      <div className="skinCareQuiz-main-modal-content-quiz-QA-btns flex flex-row gap-[1rem]">
                        <button
                          onClick={() => handleQA(4)}
                          className="skinCareQuiz-main-modal-content-quiz-QA-btn py-[1rem] px-[2rem]  text-black border-2 border-solid border-transparent hover:border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => handleQA(6)}
                          className="skinCareQuiz-main-modal-content-quiz-QA-btn py-[1rem] px-[2rem] bg-black text-white hover:text-black hover:bg-white border-2 border-solid border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {nextQuestion === 6 && (
                    <div className="skinCareQuiz-main-modal-content-quiz-QA items-center flex flex-col gap-[1rem]">
                      <p className="text-[25px]">What Is Your Skin Type ?</p>
                      <Question6 />
                      <div className="skinCareQuiz-main-modal-content-quiz-QA-btns flex flex-row gap-[1rem]">
                        <button
                          onClick={() => handleQA(5)}
                          className="skinCareQuiz-main-modal-content-quiz-QA-btn py-[1rem] px-[2rem]  text-black border-2 border-solid border-transparent hover:border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => handleQA(7)}
                          className="skinCareQuiz-main-modal-content-quiz-QA-btn py-[1rem] px-[2rem] bg-black text-white hover:text-black hover:bg-white border-2 border-solid border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {nextQuestion === 7 && (
                    <div className="skinCareQuiz-main-modal-content-quiz-QA items-center flex flex-col gap-[1rem]">
                      <p className="text-[25px]">See Your Results!</p>

                      <div className="skinCareQuiz-main-modal-content-quiz-QA-btns flex flex-row gap-[1rem]">
                        <button
                          onClick={() => handleQA(6)}
                          className="skinCareQuiz-main-modal-content-quiz-QA-btn py-[1rem] px-[2rem]  text-black border-2 border-solid border-transparent hover:border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit"
                        >
                          Back
                        </button>
                        <button
                          // onClick={() => handleQA(3)}
                          className="skinCareQuiz-main-modal-content-quiz-QA-btn py-[1rem] px-[2rem] bg-black text-white hover:text-black hover:bg-white border-2 border-solid border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
