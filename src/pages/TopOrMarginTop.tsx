import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Parent = styled.div`
  position: relative;
  height: 45%;
  width: 55%;
  margin-top: 2%;

  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.6;
`;

type childProps = {
  top?: number;
  marginTop?: number;
};

const Child = styled.div<childProps>`
  position: absolute;
  ${(props) =>
    props.top ? `top: ${props.top}%;` : `margin-top: ${props.marginTop}%;`}

  height: 30%;
  width: 90%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
`;

const TopOrMarginTop = () => {
  const [parentSize, setParentSize] = React.useState<any>({
    width: 0,
    height: 0,
  });
  const [height, setHeight] = React.useState<number>(0);
  const [value, setValue] = React.useState<string>("");
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setParentSize({
      width: ref.current?.clientWidth,
      height: ref.current?.clientHeight,
    });
  }, []);

  return (
    <Container>
      <h1 className="text-2xl text-slate-700 font-semibold ">
        <code>top</code>, or <code>margin-top</code>?
      </h1>
      <div className="my-2 flex justify-center items-center">
        <input
          className="border border-solid border-slate-700 rounded-lg mr-1"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="bg-slate-700 rounded-lg font-semibold text-white text-xs leading-6 px-1.5"
          onClick={() => {
            setHeight(Number(value));
          }}
        >
          적용
        </button>
      </div>
      <p
        style={{ fontSize: "0.5rem" }}
      >{`* Parent's height: ${parentSize.height} | width: ${parentSize.width}`}</p>
      <Parent>
        <div className="h-full w-2/4 mr-8 bg-slate-300 rounded-2xl" ref={ref}>
          <div className="relative h-full w-full flex justify-center mt-5">
            <Child top={height}>
              <h4 className="font-semibold">
                <code>top</code>
              </h4>

              <h5>
                parent's height * {height}% ={" "}
                {(parentSize.height * height) / 100}
              </h5>
            </Child>
          </div>
        </div>
        <div className="h-full w-2/4 bg-slate-300 rounded-2xl">
          <div className=" relative h-full w-full flex justify-center mt-5">
            <Child marginTop={height}>
              <h4 className="font-semibold">
                <code>margin-top</code>
              </h4>
              <h5>
                parent's width * {height}% = {(parentSize.width * height) / 100}
              </h5>
            </Child>
          </div>
        </div>
      </Parent>
    </Container>
  );
};

export default TopOrMarginTop;
