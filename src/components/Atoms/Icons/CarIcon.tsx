import React from "react";

export function CarIcon({ size, color }: { size?: number; color?: string }): JSX.Element {
  return (
    <svg width="60" height="46" viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.6418 16.7649L8.76563 6.54015C10.3441 2.62257 14.6016 0 19.3828 0H40.6172C45.3984 0 49.6523 2.62257 51.2344 6.54015L55.3594 16.7649C58.0781 17.7415 60 20.0711 60 22.7873V42.3192C60 44.1198 58.3242 45.5745 56.25 45.5745H52.5C50.4258 45.5745 48.75 44.1198 48.75 42.3192V37.4362H11.25V42.3192C11.25 44.1198 9.5707 45.5745 7.5 45.5745H3.75C1.6793 45.5745 0 44.1198 0 42.3192V22.7873C0 20.0711 1.91719 17.7415 4.6418 16.7649ZM12.7852 16.2766H47.2148L44.1562 8.68764C43.6289 7.38551 42.2109 6.51065 40.6172 6.51065H19.3828C17.7891 6.51065 16.3711 7.38551 15.8438 8.68764L12.7852 16.2766ZM11.25 22.7873C9.1793 22.7873 7.5 24.242 7.5 26.0426C7.5 27.8432 9.1793 29.2979 11.25 29.2979C13.3242 29.2979 15 27.8432 15 26.0426C15 24.242 13.3242 22.7873 11.25 22.7873ZM48.75 29.2979C50.8242 29.2979 52.5 27.8432 52.5 26.0426C52.5 24.242 50.8242 22.7873 48.75 22.7873C46.6758 22.7873 45 24.242 45 26.0426C45 27.8432 46.6758 29.2979 48.75 29.2979Z"
        fill="#FBA91A"
      />
    </svg>
  );
}
