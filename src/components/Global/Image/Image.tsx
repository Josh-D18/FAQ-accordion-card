interface IImage {
  Image: React.FC<React.SVGProps<SVGSVGElement>>;
  imgClass: {[key: string]: string};
  classname: string;
}

const Image = (props: IImage) => {
    const {Image, imgClass, classname} = props;

  return <Image className={imgClass[classname]} aria-hidden={true}/>;
};

export default Image;
