import React from "react";
import Card from "./Card";
import lady from "../../assets/lady.png";

const FReviews = () => {
  return (
    <section>
      <div className="px-[5rem] pt-4 sm:pt-1 pb-6 md:px-[1rem] sm:px-3">
        <p className="text-center font-bold text-[3rem] py-4">
          Featured <span className="text-[#225AA5]">Reviews</span>
        </p>
        <div className="flex gap-6 md:flex-wrap sm:flex-col">
          <Card
            image={lady}
            Name="Ashley Plumptre"
            org="Professional Footballer"
            rating=""
            review='This has been such an important website for me. Finding quality public speakers can be difficult. But with this website, i just simply browse till i find the best fit for me'
          />
          <Card
            image={lady}
            Name="Ashley Plumptre"
            org="Professional Footballer"
            rating=""
            review='This has been such an important website for me. Finding quality public speakers can be difficult. But with this website, i just simply browse till i find the best fit for me'
          />
          <Card
          image={lady}
          Name="Ashley Plumptre"
          org="Professional Footballer"
          rating=""
          review='This has been such an important website for me. Finding quality public speakers can be difficult. But with this website, i just simply browse till i find the best fit for me'
          />
        </div>
        <div className="flex gap-6 md:flex-wrap pt-6 sm:flex-col">
          <Card
            image={lady}
            Name="Ashley Plumptre"
            org="Professional Footballer"
            rating=""
            review='This has been such an important website for me. Finding quality public speakers can be difficult. But with this website, i just simply browse till i find the best fit for me'
          />
          <Card
            image={lady}
            Name="Ashley Plumptre"
            org="Professional Footballer"
            rating=""
            review='This has been such an important website for me. Finding quality public speakers can be difficult. But with this website, i just simply browse till i find the best fit for me'
          />
          <Card
          image={lady}
          Name="Ashley Plumptre"
          org="Professional Footballer"
          rating=""
          review='This has been such an important website for me. Finding quality public speakers can be difficult. But with this website, i just simply browse till i find the best fit for me'
          />
        </div>
      </div>
    </section>
  );
};

export default FReviews;
