interface CardItemProps {
  index: string;
  imgSrc: string;
  title: string;
  body: string;
}

export const CardItem = ({ index, imgSrc, title, body }: CardItemProps) => {
  return (
    <div className={"flex text-left gap-5 xl:w-96 md:w-80 w-96"}>
      <img src={imgSrc} className="h-40" />
      <div>
        <span className="font-bold text-grayishBlue text-3xl">{index}</span>
        <h4 className="font-bold text-lg mt-3">{title}</h4>
        <p className="text-darkGrayishBlue">{body}</p>
      </div>
    </div>
  );
};
