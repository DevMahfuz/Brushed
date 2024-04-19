const MembershipPlan = () => {
  const plan = [
    {
      id: 1,
      name: "Glam Basic: AED 199 for one month - 10% Off all the Treatments",
      description:
        "Glam Basic: For just AED 199, indulge in a month of pampering and save big with 10% off on all treatments. Whether it's a relaxing massage, a rejuvenating facial, or a stunning makeover, our Glam Basic package ensures you look and feel your best without breaking the bank.",
      price: 199,
    },
    {
      id: 2,
      name: "Elite Beauty: AED 399 for 3 months -  15% Off all the  Treatments",
      description:
        "Elite Beauty: Elevate your beauty experience with our Elite Beauty package. For AED 399, enjoy three months of exclusive perks, including 15% off on all treatments. With access to our deluxe services, from manicures to hair styling, you'll be turning heads everywhere you go.",
      price: 399,
    },
    {
      id: 3,
      name: "Luxury Glow: AED 599 for 6 months - 20% Off  all the  Treatments",
      description:
        "Luxury Glow: Unleash your inner glow with our Luxury Glow package. Priced at AED 599 for six months, this premium membership offers unbeatable value with 20% off on all treatments. Treat yourself to the ultimate salon experience, from luxurious facials to expert hair care, and revel in the savings while you shine bright.",
      price: 599,
    },
  ];

  return (
    <div className="plan-container">
      {plan.map((x) => {
        return (
          <div className="plan-item" key={x.id}>
            <h2>{x.name}</h2>
            <p>{x.description}</p>
            <button>Join Now</button>
          </div>
        );
      })}
    </div>
  );
};

export default MembershipPlan;
