import "./fonte.css";
import headerImage from "../../public/img/image-omelette.jpeg";

export const Home = () => {
  return (
    <>
      <header className="md:w-4/5 md:mt-7 md:mx-auto">
        <img
          className="w-full lg:rounded-xl"
          src={headerImage}
          alt="Classic Omelette"
        />
      </header>
      <div className="w-4/5 flex flex-col mx-auto">
        <section className="mt-7">
          {/* <section className="w-full mt-10 px-7"> */}
          <h1
            className="text-4xl font-bold young-regular"
            style={{ color: "hsl(24, 5%, 18%)" }}
          >
            Simple Omelette Recipe
          </h1>
          <p
            className="mt-5 font-medium outfit-regular"
            style={{ color: "hsl(30, 10%, 34%)" }}
          >
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetabeles, or meats.
          </p>
        </section>
        <section
          className="mt-7 p-4 rounded-2xl"
          style={{ backgroundColor: "hsl(330, 100%, 98%)" }}
        >
          <h3
            className="text-xl font-bold outfit-bold"
            style={{ color: "hsl(332, 51%, 32%)" }}
          >
            Preparation time
          </h3>
          <ul className="px-7 mt-5">
            <li className="list-disc" style={{ color: "hsl(332, 51%, 32%)" }}>
              <span
                className="ml-4 outfit-semibold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                <strong>Total</strong>: Approximalaty 10 minutes.
              </span>
            </li>
            <li
              className="list-disc mt-3"
              style={{ color: "hsl(332, 51%, 32%)" }}
            >
              <span
                className="ml-4 outfit-semibold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                <strong>Preparation</strong>: 5 minutes.
              </span>
            </li>
            <li
              className="list-disc mt-3"
              style={{ color: "hsl(332, 51%, 32%)" }}
            >
              <span
                className="ml-4 outfit-semibold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                <strong>Cooking</strong>: 5 minutes.
              </span>
            </li>
          </ul>
        </section>
        <section
          className="mt-7 pb-7 border-b"
          style={{ borderColor: "hsl(30, 18%, 87%)" }}
        >
          <h2
            className="text-3xl young-regular"
            style={{ color: "hsl(14, 45%, 36%)" }}
          >
            Ingredients
          </h2>
          <ul
            className="list-disc px-7 text-sm"
            style={{ color: "hsl(14, 45%, 36%)" }}
          >
            <li className="mt-5">
              <span
                className="text-base ml-3 outfit-semibold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                2-3 large eggs
              </span>
            </li>
            <li className="mt-3">
              <span
                className="text-base ml-3 outfit-semibold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                Salt, to taste
              </span>
            </li>
            <li className="mt-3">
              <span
                className="text-base ml-3 outfit-semibold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                Pepper, to taste
              </span>
            </li>
            <li className="mt-3">
              <span
                className="text-base ml-3 outfit-semibold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                1 tablespoon of butter or oil
              </span>
            </li>
            <li className="mt-3">
              <span
                className="text-base ml-3 outfit-semibold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </span>
            </li>
          </ul>
        </section>
        <section className="mt-7">
          <h2
            className="text-3xl young-regular"
            style={{ color: "hsl(14, 45%, 36%)" }}
          >
            Instructions
          </h2>
          <div className="flex mt-7">
            <p className="outfit-bold" style={{ color: "hsl(14, 45%, 36%)" }}>
              1.
            </p>
            <p className="ml-4 outfit-regular">
              <span
                className="outfit-bold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                Beat the eggs
              </span>
              : In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </p>
          </div>
          <div className="flex mt-2">
            <p className="outfit-bold" style={{ color: "hsl(14, 45%, 36%)" }}>
              2.
            </p>
            <p className="ml-4 outfit-regular">
              <span
                className="outfit-bold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                Heat the pan
              </span>
              : Place a non-stick frying pan over medium heat and add butter or
              oil.
            </p>
          </div>
          <div className="flex mt-2">
            <p className="outfit-bold" style={{ color: "hsl(14, 45%, 36%)" }}>
              3.
            </p>
            <p className="ml-4 outfit-regular">
              <span
                className="outfit-bold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                Cook the omelette
              </span>
              : Once the butter is melted and bubbling, pour in the eggs. Tilt
              the pan to ensure the eggs evenly coat the surface.
            </p>
          </div>
          <div className="flex mt-2">
            <p className="outfit-bold" style={{ color: "hsl(14, 45%, 36%)" }}>
              4.
            </p>
            <p className="ml-4">
              <span
                className="outfit-bold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                Add fillings (optional)
              </span>
              : When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </p>
          </div>
          <div className="flex mt-2">
            <p className="outfit-bold" style={{ color: "hsl(14, 45%, 36%)" }}>
              5.
            </p>
            <p className="ml-4 outfit-regular">
              <span
                className="outfit-bold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                Fold and serve
              </span>
              : As the omelette continues to cook, carefully lift one edge and
              fold it over the fillings. Let it cook for another minute, then
              slide it onto a plate.
            </p>
          </div>
          <div className="flex mt-2">
            <p className="outfit-bold" style={{ color: "hsl(14, 45%, 36%)" }}>
              6.
            </p>
            <p className="ml-4 outfit-regular">
              <span
                className="outfit-bold"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                Enjoy
              </span>
              : Serve hot, with additional salt and pepper if needed.
            </p>
          </div>
        </section>
        <section className="mt-7 mb-10">
          <h3
            className="text-3xl young-regular"
            style={{ color: "hsl(14, 45%, 36%)" }}
          >
            Nutrition
          </h3>
          <p
            className="mt-7 font-medium outfit-regular"
            style={{ color: "hsl(30, 10%, 34%)" }}
          >
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="w-full mt-4 outfit-bold">
            <tr className="border-b">
              <td
                className="px-7 py-2 outfit-regular"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                Calories
              </td>
              <td style={{ color: "hsl(14, 45%, 36%)" }}>277kcal</td>
            </tr>
            <tr className="border-b">
              <td
                className="px-7 py-2 outfit-regular"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                Carbs
              </td>
              <td style={{ color: "hsl(14, 45%, 36%)" }}>0g</td>
            </tr>
            <tr className="border-b">
              <td
                className="px-7 py-2 outfit-regular"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                Protein
              </td>
              <td style={{ color: "hsl(14, 45%, 36%)" }}>20g</td>
            </tr>
            <tr className="border-b">
              <td
                className="px-7 py-2 outfit-regular"
                style={{ color: "hsl(30, 10%, 34%)" }}
              >
                Fat
              </td>
              <td style={{ color: "hsl(14, 45%, 36%)" }}>22g</td>
            </tr>
          </table>
        </section>
      </div>
    </>
  );
};
