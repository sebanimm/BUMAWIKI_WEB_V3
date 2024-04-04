import { SVGProps } from "react";

interface PropsType extends SVGProps<SVGSVGElement> {
  isLike?: boolean;
}

const LikeIcon = ({ isLike, ...props }: PropsType) => {
  return isLike ? (
    <svg
      width="24"
      height="21"
      {...props}
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1463 2.68498C18.4607 2.75764 19.6932 3.34688 20.575 4.32428C21.4569 5.30168 21.9167 6.58802 21.8543 7.90298C21.8543 10.975 19.2023 12.862 16.6573 15.125C14.1453 17.368 12.7923 18.594 12.3543 18.877C11.8773 18.568 10.2113 17.054 8.05129 15.125C5.49529 12.853 2.85429 10.948 2.85429 7.90298C2.79185 6.58802 3.25168 5.30168 4.13355 4.32428C5.01542 3.34688 6.24786 2.75764 7.56229 2.68498C8.29043 2.66291 9.01185 2.83016 9.656 3.17038C10.3002 3.5106 10.845 4.01214 11.2373 4.62598C12.0773 5.80098 12.2173 6.38898 12.3573 6.38898C12.4973 6.38898 12.6353 5.80098 13.4673 4.62298C13.8574 4.0063 14.4024 3.50277 15.048 3.16269C15.6936 2.82261 16.4171 2.65789 17.1463 2.68498ZM17.1463 0.684978C16.2382 0.655905 15.3353 0.832061 14.5048 1.20033C13.6742 1.5686 12.9374 2.11949 12.3493 2.81198C11.7617 2.1215 11.0264 1.57189 10.1979 1.20373C9.36927 0.835575 8.46857 0.658292 7.56229 0.684978C5.71716 0.75713 3.97567 1.55696 2.71863 2.90957C1.46159 4.26218 0.791286 6.05751 0.854292 7.90298C0.854292 11.513 3.40429 13.73 5.86929 15.873C6.15229 16.119 6.43829 16.367 6.72229 16.62L7.74929 17.538C8.86933 18.6037 10.0436 19.6111 11.2673 20.556C11.5911 20.7656 11.9686 20.8772 12.3543 20.8772C12.74 20.8772 13.1175 20.7656 13.4413 20.556C14.704 19.5822 15.9144 18.5425 17.0673 17.441L17.9893 16.617C18.2823 16.357 18.5793 16.098 18.8743 15.843C21.2083 13.818 23.8543 11.523 23.8543 7.90298C23.9173 6.05751 23.247 4.26218 21.99 2.90957C20.7329 1.55696 18.9914 0.75713 17.1463 0.684978Z"
        fill="black"
      />
      <ellipse cx="7.85101" cy="8.00043" rx="6.14661" ry="6.35638" fill="black" />
      <ellipse cx="16.4501" cy="8.00043" rx="6.14661" ry="6.35638" fill="black" />
      <ellipse cx="12.165" cy="11.4169" rx="6.14661" ry="6.35638" fill="black" />
      <ellipse cx="12.3543" cy="12.7198" rx="4.4418" ry="6.35638" fill="black" />
    </svg>
  ) : (
    <svg
      width="24"
      height="21"
      {...props}
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1463 2.68498C18.4607 2.75764 19.6932 3.34688 20.575 4.32428C21.4569 5.30168 21.9167 6.58802 21.8543 7.90298C21.8543 10.975 19.2023 12.862 16.6573 15.125C14.1453 17.368 12.7923 18.594 12.3543 18.877C11.8773 18.568 10.2113 17.054 8.05131 15.125C5.49531 12.853 2.85431 10.948 2.85431 7.90298C2.79187 6.58802 3.2517 5.30168 4.13357 4.32428C5.01544 3.34688 6.24788 2.75764 7.56231 2.68498C8.29045 2.66291 9.01187 2.83016 9.65602 3.17038C10.3002 3.5106 10.845 4.01214 11.2373 4.62598C12.0773 5.80098 12.2173 6.38898 12.3573 6.38898C12.4973 6.38898 12.6353 5.80098 13.4673 4.62298C13.8574 4.0063 14.4024 3.50277 15.048 3.16269C15.6936 2.82261 16.4171 2.65789 17.1463 2.68498ZM17.1463 0.684978C16.2382 0.655905 15.3353 0.832061 14.5048 1.20033C13.6742 1.5686 12.9374 2.11949 12.3493 2.81198C11.7617 2.1215 11.0264 1.57189 10.1979 1.20373C9.36929 0.835575 8.46859 0.658292 7.56231 0.684978C5.71718 0.75713 3.97569 1.55696 2.71865 2.90957C1.46161 4.26218 0.791301 6.05751 0.854307 7.90298C0.854307 11.513 3.40431 13.73 5.86931 15.873C6.15231 16.119 6.43831 16.367 6.72231 16.62L7.74931 17.538C8.86935 18.6037 10.0436 19.6111 11.2673 20.556C11.5911 20.7656 11.9686 20.8772 12.3543 20.8772C12.74 20.8772 13.1175 20.7656 13.4413 20.556C14.704 19.5822 15.9144 18.5425 17.0673 17.441L17.9893 16.617C18.2823 16.357 18.5793 16.098 18.8743 15.843C21.2083 13.818 23.8543 11.523 23.8543 7.90298C23.9173 6.05751 23.247 4.26218 21.99 2.90957C20.7329 1.55696 18.9914 0.75713 17.1463 0.684978Z"
        fill="black"
      />
    </svg>
  );
};

export default LikeIcon;
