import { useState } from "react";
import "./App.css";
import {
  ButtonCSS,
  ButtonSizeClass,
  ButtonVariantClass,
} from "./components/Button-CSS/Button-CSS";
import {
  ButtonSizes,
  ButtonTailwind,
  ButtonVariants,
} from "./components/Button-Tailwind/Button-Tailwind";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="my-8">
        <p className="text-primary-1 text-6 font-headline font-bold">
          Hallo Tailwind
        </p>
        <h1 className="mt-8">Tailwind Buttons</h1>
        <div className="flex gap-8 items-center justify-center mt-4">
          <ButtonTailwind onClick={() => console.log("button tw clicked")}>
            Click Me
          </ButtonTailwind>
          <ButtonTailwind
            onClick={() => console.log("button tw clicked")}
            variant={ButtonVariants.OUTLINE}
            size={ButtonSizes.SMALL}
          >
            Outline
          </ButtonTailwind>
          <ButtonTailwind
            onClick={() => console.log("button tw clicked")}
            variant={ButtonVariants.OUTLINE}
            size={ButtonSizes.SMALL}
            disabled
          >
            Disabled
          </ButtonTailwind>
        </div>
        <h1 className="mt-8">CSS Buttons</h1>
        <div className="flex gap-8 items-center justify-center mt-4">
          <ButtonCSS onClick={() => console.log("button tw clicked")}>
            Click Me
          </ButtonCSS>
          <ButtonCSS
            onClick={() => console.log("button tw clicked")}
            variant={ButtonVariantClass.OUTLINE}
            size={ButtonSizeClass.SMALL}
          >
            Outline
          </ButtonCSS>
          <ButtonCSS
            onClick={() => console.log("button tw clicked")}
            variant={ButtonVariantClass.OUTLINE}
            size={ButtonSizeClass.SMALL}
            disabled
          >
            Disabled
          </ButtonCSS>
        </div>
        <h1 className="mt-8">CSS Button style auf Link</h1>
        <a href="#" className="btn -primary -normal">
          Link
        </a>
      </div>
    </div>
  );
}

export default App;
