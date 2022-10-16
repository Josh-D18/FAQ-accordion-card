interface IImage {
  Image: SVGSVGElement | any;
  imgClass: {[key: string]: string};
  classname: string;
  alt:string;
}

const Image = (props: IImage) => {
    const {Image, imgClass, classname, alt} = props;

  return <Image className={imgClass[classname]} alt={alt}/>;
};

export default Image;
