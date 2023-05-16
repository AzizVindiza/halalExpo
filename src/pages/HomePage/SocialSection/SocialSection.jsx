import React from 'react';
import './SocialSection.sass'
const SocialSection = () => {
    return (
        <section className="social">
            <div className="social__container container">
                <div className="social__card">
                    <a href="">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.7903 0.121094H16.2097C11.9441 0.125657 7.85452 1.82218 4.83829 4.83841C1.82206 7.85464 0.125535 11.9442 0.120972 16.2098V43.7904C0.125535 48.056 1.82206 52.1456 4.83829 55.1618C7.85452 58.1781 11.9441 59.8746 16.2097 59.8792H43.7903C48.0559 59.8746 52.1455 58.1781 55.1617 55.1618C58.178 52.1456 59.8745 48.056 59.879 43.7904V16.2098C59.8745 11.9442 58.178 7.85464 55.1617 4.83841C52.1455 1.82218 48.0559 0.125657 43.7903 0.121094ZM30 43.7904C27.2725 43.7904 24.6063 42.9817 22.3385 41.4664C20.0707 39.9511 18.3032 37.7973 17.2594 35.2775C16.2157 32.7576 15.9426 29.9848 16.4747 27.3098C17.0068 24.6347 18.3202 22.1775 20.2488 20.2489C22.1774 18.3203 24.6346 17.0069 27.3096 16.4748C29.9847 15.9427 32.7575 16.2158 35.2773 17.2595C37.7972 18.3033 39.9509 20.0708 41.4662 22.3386C42.9815 24.6064 43.7903 27.2727 43.7903 30.0001C43.7865 33.6564 42.3324 37.1618 39.747 39.7472C37.1617 42.3325 33.6563 43.7866 30 43.7904ZM47.2379 16.2098C46.556 16.2098 45.8895 16.0076 45.3225 15.6288C44.7556 15.25 44.3137 14.7115 44.0528 14.0816C43.7918 13.4516 43.7235 12.7584 43.8566 12.0896C43.9896 11.4209 44.3179 10.8066 44.8001 10.3244C45.2823 9.84226 45.8966 9.51391 46.5653 9.38089C47.2341 9.24786 47.9273 9.31613 48.5572 9.57707C49.1872 9.83801 49.7256 10.2799 50.1045 10.8468C50.4833 11.4138 50.6855 12.0804 50.6855 12.7622C50.6855 13.6766 50.3223 14.5535 49.6757 15.2C49.0292 15.8466 48.1523 16.2098 47.2379 16.2098ZM39.1936 30.0001C39.1936 31.8184 38.6544 33.5959 37.6442 35.1078C36.634 36.6197 35.1981 37.798 33.5182 38.4939C31.8383 39.1897 29.9898 39.3718 28.2064 39.017C26.4231 38.6623 24.7849 37.7867 23.4992 36.5009C22.2134 35.2152 21.3378 33.5771 20.9831 31.7937C20.6284 30.0103 20.8104 28.1618 21.5063 26.4819C22.2021 24.802 23.3805 23.3662 24.8923 22.356C26.4042 21.3458 28.1817 20.8066 30 20.8066C32.4383 20.8066 34.7767 21.7752 36.5008 23.4993C38.2249 25.2234 39.1936 27.5618 39.1936 30.0001Z" fill="#9A9A9A"/>
                        </svg>
                    </a>
                </div>
                <div className="social__card">
                    <a href="">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59.7619 30.0002C59.7619 13.5716 46.4286 0.238281 30 0.238281C13.5714 0.238281 0.238098 13.5716 0.238098 30.0002C0.238098 44.405 10.4762 56.399 24.0476 59.1669V38.9288H18.0952V30.0002H24.0476V22.5597C24.0476 16.8157 28.7202 12.143 34.4643 12.143H41.9048V21.0716H35.9524C34.3155 21.0716 32.9762 22.4109 32.9762 24.0478V30.0002H41.9048V38.9288H32.9762V59.6133C48.006 58.1252 59.7619 45.4466 59.7619 30.0002Z" fill="#9A9A9A"/>
                        </svg>

                    </a>
                </div>
                <div className="social__card">
                    <a href="">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.1289 0.12936C17.7539 1.10202 9.53908 6.19967 4.54689 14.145C-2.53123 25.395 -1.20701 40.2661 7.73439 50.063C12.6914 55.4887 18.8789 58.7348 26.3086 59.7895C27.6914 59.9887 32.2969 59.977 33.75 59.7895C40.5352 58.852 46.6055 55.8403 51.2227 51.1294C52.7461 49.5825 53.0625 49.2192 54.0703 47.8833C57.0703 43.8872 59.0274 39.0122 59.7891 33.6919C59.9883 32.309 59.9883 27.6919 59.7891 26.309C59.2852 22.7583 58.3594 19.7348 56.8945 16.77C55.3242 13.6294 53.7305 11.3911 51.2344 8.87155C46.6055 4.18405 40.8164 1.26608 34.1602 0.281704C32.7188 0.0707664 28.5586 -0.0229836 27.1289 0.12936ZM36.3867 13.4419C36.6445 15.4458 37.2774 16.9809 38.3789 18.3169C39.8086 20.0512 41.9414 21.1645 44.2617 21.3989L45 21.4809V24.2465V27.0122L43.8985 26.9419C43.2891 26.895 42.4922 26.7895 42.1289 26.7192C40.5352 26.3911 38.4961 25.5239 37.125 24.5981C36.7617 24.3403 36.4336 24.1411 36.3985 24.1411C36.375 24.1411 36.3516 27.2348 36.3633 31.02C36.3867 37.8403 36.3867 37.9223 36.1172 38.9653C35.1445 42.7856 32.2149 45.7622 28.418 46.77C27.0117 47.1333 24.9727 47.1919 23.5547 46.8989C19.3242 46.0317 16.043 42.7973 15.1758 38.6606C14.9414 37.5825 14.9531 35.4965 15.1875 34.3598C15.3867 33.3637 15.9375 31.9809 16.5469 30.9731C17.0625 30.1176 18.4922 28.5825 19.3828 27.9497C21.4219 26.5083 24.1992 25.7231 26.4844 25.9575L27.3047 26.0395V28.8872V31.7348L26.8711 31.6176C26.625 31.5473 25.957 31.5239 25.3711 31.5473C24.0352 31.6059 23.0274 32.0512 22.1133 32.9887C19.1953 35.9536 20.8477 40.8755 24.9844 41.52C27.6797 41.9419 30.3047 39.9614 30.7031 37.2075C30.7735 36.7153 30.8203 31.7583 30.8203 24.6333V12.8911H33.5625H36.3164L36.3867 13.4419Z" fill="#9A9A9A"/>
                        </svg>

                    </a>
                </div>

                <div className="social__card">
                    <a href=""><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 0.285156C13.589 0.285156 0.285706 13.5885 0.285706 29.9994C0.285706 46.4104 13.589 59.7137 30 59.7137C46.4109 59.7137 59.7143 46.4104 59.7143 29.9994C59.7143 13.5885 46.4109 0.285156 30 0.285156ZM41.4276 33.8097C41.4276 33.8097 44.0555 36.4035 44.7024 37.6075C44.7209 37.6323 44.7302 37.6571 44.7364 37.6694C44.9995 38.1121 45.0614 38.4556 44.9314 38.7125C44.7148 39.1397 43.9719 39.3502 43.7181 39.3687H39.0752C38.7533 39.3687 38.0786 39.2852 37.2614 38.7218C36.6331 38.2823 36.014 37.5611 35.4105 36.8585C34.5098 35.8123 33.7298 34.9085 32.9436 34.9085C32.8437 34.9083 32.7445 34.924 32.6495 34.9549C32.0552 35.1468 31.2938 35.9949 31.2938 38.2544C31.2938 38.9602 30.7367 39.3656 30.3436 39.3656H28.2171C27.4928 39.3656 23.7198 39.1118 20.3769 35.5863C16.285 31.2685 12.6017 22.608 12.5707 22.5275C12.3386 21.9673 12.8183 21.6671 13.3414 21.6671H18.0307C18.6559 21.6671 18.8602 22.0478 19.0026 22.3852C19.1698 22.7783 19.7826 24.3413 20.7886 26.0994C22.4198 28.9656 23.4195 30.1294 24.2212 30.1294C24.3715 30.1277 24.5191 30.0894 24.6514 30.018C25.6976 29.4361 25.5026 25.7063 25.4562 24.9325C25.4562 24.7871 25.4531 23.2642 24.9176 22.5337C24.5338 22.0044 23.8807 21.8033 23.4845 21.729C23.6449 21.5077 23.8561 21.3283 24.1005 21.2059C24.8186 20.8468 26.1124 20.7942 27.3969 20.7942H28.1119C29.5048 20.8128 29.8638 20.9025 30.3683 21.0294C31.3898 21.274 31.4114 21.9333 31.3217 24.1897C31.2938 24.8304 31.2659 25.5547 31.2659 26.409C31.2659 26.5947 31.2567 26.7928 31.2567 27.0033C31.2257 28.1516 31.1886 29.4547 31.9995 29.9902C32.1053 30.0565 32.2275 30.0919 32.3524 30.0923C32.634 30.0923 33.4821 30.0923 35.7788 26.1521C36.4871 24.8838 37.1026 23.5659 37.6205 22.2087C37.6669 22.1283 37.8031 21.8806 37.964 21.7847C38.0828 21.7241 38.2145 21.6933 38.3479 21.6949H43.8605C44.4609 21.6949 44.8726 21.7847 44.95 22.0168C45.0862 22.3852 44.9252 23.5087 42.4088 26.9166L41.2852 28.3992C39.004 31.3892 39.004 31.5409 41.4276 33.8097Z" fill="#9A9A9A"/>
                    </svg>
                    </a>
                </div>
                <div className="social__card">
                    <a href=""><svg width="85" height="59" viewBox="0 0 85 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.0834 42.1253L55.9246 29.5003L34.0834 16.8753V42.1253ZM82.7317 9.17408C83.2788 11.152 83.6575 13.8032 83.91 17.1699C84.2046 20.5366 84.3308 23.4403 84.3308 25.9653L84.5833 29.5003C84.5833 38.7166 83.91 45.492 82.7317 49.8266C81.6796 53.6141 79.2388 56.0549 75.4513 57.107C73.4734 57.6541 69.8542 58.0328 64.2992 58.2853C58.8284 58.5799 53.8204 58.7062 49.1913 58.7062L42.5 58.9587C24.8671 58.9587 13.8834 58.2853 9.54877 57.107C5.76127 56.0549 3.32044 53.6141 2.26835 49.8266C1.72127 47.8487 1.34252 45.1974 1.09002 41.8307C0.795437 38.4641 0.669187 35.5603 0.669187 33.0353L0.416687 29.5003C0.416687 20.2841 1.09002 13.5087 2.26835 9.17408C3.32044 5.38658 5.76127 2.94574 9.54877 1.89366C11.5267 1.34658 15.1459 0.967825 20.7009 0.715325C26.1717 0.420742 31.1796 0.294492 35.8088 0.294492L42.5 0.0419922C60.1329 0.0419922 71.1167 0.715326 75.4513 1.89366C79.2388 2.94574 81.6796 5.38658 82.7317 9.17408Z" fill="#9A9A9A"/>
                    </svg>
                    </a>
                </div>
                <div className="social__card">
                    <a href="">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.1992 0.117385C17.0273 1.10176 7.93358 7.26582 3.32811 16.3127C1.69921 19.5119 0.738271 22.5939 0.210927 26.3088C-0.0234482 27.9494 0.0117081 32.215 0.281239 34.0432C0.738271 37.301 1.69921 40.383 3.17577 43.3479C6.09374 49.2307 10.7578 53.8947 16.6523 56.8244C26.2031 61.5822 37.5 60.926 46.4062 55.1018C49.8867 52.8283 53.1914 49.4533 55.4414 45.8674C56.3086 44.508 57.5977 41.8596 58.1836 40.2658C58.7812 38.6486 59.4727 35.8596 59.7187 34.0432C59.9883 32.2033 60.0234 27.9377 59.7891 26.3088C59.0977 21.4455 57.5508 17.2971 54.9844 13.4299C53.9062 11.7893 52.8164 10.4533 51.293 8.91817C46.6172 4.19551 40.8047 1.26582 34.1601 0.281447C32.7305 0.0705099 28.6992 -0.0232401 27.1992 0.117385ZM31.9453 11.4729C36.5273 12.4221 39.7266 16.5939 39.4453 21.2697C39.3633 22.7346 39.1406 23.5666 38.4961 24.9025C37.5703 26.8127 36.0703 28.3127 34.1601 29.2385C32.918 29.8361 31.875 30.1057 30.4805 30.1994C26.5195 30.4572 22.6523 27.9494 21.1992 24.1994C18.4687 17.1564 24.5508 9.94942 31.9453 11.4729ZM21.7148 30.2463C21.9609 30.3166 22.582 30.633 23.0859 30.9494C26.1562 32.8947 29.8242 33.4572 33.3516 32.5314C34.4883 32.2268 36.0351 31.5471 36.832 31.008C38.3437 29.9768 39.3867 29.883 40.3359 30.6799C40.7695 31.0432 41.25 32.0158 41.25 32.5549C41.25 32.7658 41.1797 33.1057 41.0859 33.3166C40.7344 34.1604 38.6367 35.7424 36.9492 36.4455C35.9062 36.8791 33.7969 37.4416 32.7305 37.5588C32.3203 37.6057 31.9922 37.676 31.9922 37.7111C31.9922 37.758 33.6445 39.4455 35.6719 41.4846C38.7422 44.5666 39.375 45.258 39.4805 45.6447C39.6445 46.2658 39.6445 46.383 39.4219 47.0275C39.0351 48.176 37.6875 48.9377 36.5508 48.633C36.1055 48.5158 35.6484 48.1174 33.082 45.5627C30.4687 42.9611 30.1172 42.6447 29.9062 42.7619C29.7773 42.8322 28.4766 44.0979 27 45.5861C24.1055 48.5158 23.6953 48.8205 22.793 48.7268C21.293 48.551 20.1914 46.9807 20.625 45.633C20.7422 45.2814 21.5976 44.3439 24.4805 41.4377L28.1836 37.6994L26.9297 37.4885C24.3047 37.0666 22.3125 36.2932 20.6367 35.0393C19.5469 34.2189 19.1719 33.8205 18.9375 33.258C18.5976 32.4494 18.7617 31.6877 19.4648 30.8908C20.0976 30.176 20.7656 29.9768 21.7148 30.2463Z" fill="#9A9A9A"/>
                            <path d="M29.0625 16.172C27.8555 16.4298 26.6016 17.3322 25.9688 18.4338C25.5 19.2189 25.2773 20.4845 25.418 21.422C25.7227 23.4025 27.1172 24.8556 29.0742 25.2658C30.6328 25.5939 32.1328 25.1252 33.2578 23.9767C34.9219 22.2892 35.0859 19.84 33.6797 17.9181C33.2344 17.297 32.2969 16.6173 31.5469 16.3478C30.8789 16.1252 29.7188 16.0431 29.0625 16.172Z" fill="#9A9A9A"/>
                        </svg>


                    </a>
                </div>
                <div className="social__card">
                    <a href="">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.1488 0.0752642C17.7619 1.04986 9.53669 6.15771 4.53817 14.1189C-2.54893 25.3914 -1.22303 40.2922 7.72972 50.1087C12.693 55.5453 18.8884 58.7979 26.3275 59.8547C27.712 60.0543 32.3234 60.0425 33.7783 59.8547C40.5721 58.9153 46.6501 55.8975 51.2731 51.1772C52.7985 49.6272 53.1153 49.2632 54.1244 47.9246C57.1282 43.9205 59.0877 39.0358 59.8504 33.7048C60.0499 32.3193 60.0499 27.6929 59.8504 26.3073C59.3459 22.7494 58.4189 19.7199 56.9522 16.7491C55.3799 13.6022 53.7841 11.3595 51.2849 8.83492C46.6501 4.13806 40.8537 1.21425 34.189 0.227912C32.7458 0.0165533 28.5803 -0.077384 27.1488 0.0752642ZM34.5997 11.9583C45.1013 14.4594 51.0619 25.0743 47.6826 35.2431C46.8144 37.8733 45.4298 40.0691 43.3412 42.1709C40.7012 44.8247 37.8499 46.3746 34.1303 47.1614C33.1095 47.3845 32.5228 47.4314 30.7276 47.4314C27.759 47.4432 25.9051 47.0557 23.2885 45.905C22.6431 45.6231 22.033 45.3883 21.9274 45.3883C21.8335 45.3883 19.698 45.9402 17.1753 46.6095C14.6643 47.2671 12.5874 47.8072 12.5757 47.7954C12.5522 47.7837 13.1154 45.6936 13.8077 43.1573L15.075 38.5309L14.5235 37.4036C13.2797 34.8791 12.7282 32.4719 12.7282 29.5364C12.74 24.5107 14.5117 20.2483 18.0553 16.7374C20.8362 13.978 24.3562 12.2636 28.4395 11.6413C28.639 11.6178 29.8241 11.6061 31.0796 11.6296C33.0274 11.6648 33.5554 11.7118 34.5997 11.9583Z" fill="#9A9A9A"/>
                            <path d="M29.3782 14.6476C23.6287 15.0586 18.3721 19.1683 16.5299 24.6989C15.9432 26.4837 15.779 27.5405 15.779 29.5367C15.779 32.5779 16.3539 34.6093 18.067 37.5918L18.3369 38.085L17.6094 40.7504C17.2105 42.2182 16.8937 43.4511 16.9289 43.4746C16.9523 43.4981 18.1961 43.1928 19.698 42.8053L22.4319 42.0773L23.8517 42.7936C26.1867 43.956 28.2166 44.4492 30.7393 44.4492C37.0403 44.4492 42.8015 40.2925 44.7962 34.2805C45.3946 32.4605 45.5471 31.5328 45.5471 29.5367C45.5471 28.1041 45.4885 27.4583 45.289 26.4837C44.01 20.4834 39.2931 15.8805 33.309 14.812C32.03 14.5889 30.8449 14.5419 29.3782 14.6476ZM25.8229 21.4698C26.1984 21.8925 27.712 25.6383 27.6299 25.9553C27.5947 26.0962 27.2427 26.6246 26.8555 27.1413C26.4683 27.6462 26.1515 28.1393 26.1515 28.245C26.1515 28.4681 27.0902 29.8654 27.8176 30.7226C28.6038 31.6503 30.094 32.7775 31.3495 33.4233C32.9335 34.21 33.0156 34.21 33.9191 33.0945C35.0455 31.7207 35.1511 31.6268 35.4562 31.709C35.8082 31.8146 39.164 33.3881 39.516 33.6112C39.7742 33.7756 39.7859 33.846 39.7273 34.5741C39.6921 35.0085 39.5747 35.5839 39.4691 35.8539C39.2227 36.4645 38.331 37.2865 37.4392 37.721C36.8173 38.0263 36.6648 38.0497 35.3624 38.0497C34.0599 38.0497 33.8722 38.0145 32.8396 37.6505C31.1383 37.0399 30.0822 36.535 28.8033 35.6778C26.3392 34.0339 23.4175 30.7344 22.2207 28.2333C21.7044 27.1413 21.5402 26.3193 21.5988 25.0746C21.6575 23.9122 21.9508 23.1489 22.7253 22.1861C23.3589 21.4111 23.7813 21.2115 24.7786 21.1997C25.4709 21.1997 25.6117 21.2349 25.8229 21.4698Z" fill="#9A9A9A"/>
                        </svg>


                    </a>
                </div>
                <div className="social__card">
                    <a href="">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.147 0.0752602C19.6253 0.850262 12.9368 4.22034 7.79715 9.80974C0.545367 17.6889 -1.88363 29.1143 1.50758 39.4007C3.04477 44.0624 5.47376 47.9609 9.02925 51.4602C13.7464 56.0984 19.4727 58.8814 26.3256 59.856C27.7219 60.0556 32.3335 60.0439 33.7768 59.8443C40.6531 58.8931 46.5789 55.9575 51.343 51.1314C56.0837 46.3287 58.8647 40.6337 59.8504 33.7056C60.0499 32.32 60.0499 27.6935 59.8504 26.3079C59.2871 22.3507 58.1372 18.781 56.3888 15.6223C55.0159 13.1211 53.42 10.984 51.343 8.88209C46.6728 4.14989 40.8643 1.21428 34.1875 0.227913C32.7442 0.0165482 28.5785 -0.0773926 27.147 0.0752602ZM44.0443 18.1938C44.5606 18.417 44.807 18.9101 44.807 19.7321C44.807 20.4836 39.8434 44.0624 39.5853 44.5791C39.2098 45.3071 38.4001 45.5772 37.5787 45.2719C37.2971 45.1662 34.5865 43.2052 30.6203 40.2579L29.6346 39.5299L27.5107 41.5613C25.9501 43.0409 25.2695 43.628 24.9879 43.6867C24.7766 43.7337 24.5772 43.7454 24.5537 43.7102C24.5185 43.6749 24.6006 41.9723 24.7414 39.9056L24.9879 36.1715L25.821 35.4083C26.2669 34.9855 29.4469 32.1086 32.8733 29.0086C36.3114 25.8969 39.1159 23.2901 39.1159 23.1961C39.1159 23.067 38.9868 23.02 38.7052 23.0317C38.3649 23.0435 36.6283 24.0886 29.5877 28.5155C24.8118 31.5333 20.8339 33.9992 20.7635 33.9992C20.4467 33.9992 13.0424 31.6155 12.6903 31.4041C11.9393 30.9344 12.1036 30.2416 13.0776 29.6897C13.3357 29.5488 15.2015 28.7855 17.2315 28.0105C19.2615 27.2238 23.0986 25.7442 25.7388 24.7226C28.3908 23.7011 33.108 21.881 36.241 20.6715C43.1056 18.0177 43.0352 18.0412 43.3755 18.0295C43.5163 18.0295 43.8214 18.0999 44.0443 18.1938Z" fill="#9A9A9A"/>
                        </svg>

                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialSection;