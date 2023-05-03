export const formatNumber = (num) => {
  // 숫자가 3자리 이상 있을경우 , 를 붙이기
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

