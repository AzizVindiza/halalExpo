import React from 'react';
import './Footer.sass'

const Footer = () => {


    const handleScrollToTop = () => {
        window.scrollTo({top: 0 , behavior: "smooth"})
    }


    return (
        <footer className={'footer'}>
            <div className="footer__container container">
                <div className="footer__wrapp">
                    <div className="footer__left">
                        <h2 className="footer__h2">29.07.23 - 01.08.23</h2>
                        <p className="footer__p">Иссык-Кульская область Экспо, МВЦx. <br/> Чолпон-Ата</p>
                        <div className="footer__links">
                            <a href={'https://instagram.com/hit.expo?igshid=MzRlODBiNWFlZA=='} className="footer__socials">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="18" fill="#40A865"/>
                                    <g clipPath="url(#clip0_775_363)">
                                        <path d="M21.6774 10.0322H14.3225C13.1851 10.0334 12.0945 10.4858 11.2902 11.2902C10.4858 12.0945 10.0334 13.1851 10.0322 14.3225V21.6774C10.0334 22.8149 10.4858 23.9054 11.2902 24.7098C12.0945 25.5141 13.1851 25.9665 14.3225 25.9677H21.6774C22.8149 25.9665 23.9054 25.5141 24.7098 24.7098C25.5141 23.9054 25.9665 22.8149 25.9677 21.6774V14.3225C25.9665 13.1851 25.5141 12.0945 24.7098 11.2902C23.9054 10.4858 22.8149 10.0334 21.6774 10.0322ZM18 21.6774C17.2726 21.6774 16.5617 21.4617 15.9569 21.0576C15.3522 20.6536 14.8808 20.0792 14.6025 19.4073C14.3241 18.7353 14.2513 17.9959 14.3932 17.2825C14.5351 16.5692 14.8853 15.9139 15.3996 15.3996C15.9139 14.8853 16.5692 14.5351 17.2825 14.3932C17.9959 14.2513 18.7353 14.3241 19.4073 14.6025C20.0792 14.8808 20.6536 15.3522 21.0576 15.9569C21.4617 16.5617 21.6774 17.2726 21.6774 18C21.6764 18.975 21.2886 19.9097 20.5992 20.5992C19.9097 21.2886 18.975 21.6764 18 21.6774ZM22.5967 14.3225C22.4149 14.3225 22.2372 14.2686 22.086 14.1676C21.9348 14.0666 21.817 13.923 21.7474 13.755C21.6778 13.587 21.6596 13.4022 21.6951 13.2238C21.7305 13.0455 21.8181 12.8817 21.9467 12.7531C22.0752 12.6245 22.239 12.537 22.4174 12.5015C22.5957 12.466 22.7806 12.4842 22.9486 12.5538C23.1166 12.6234 23.2601 12.7412 23.3612 12.8924C23.4622 13.0436 23.5161 13.2214 23.5161 13.4032C23.5161 13.647 23.4192 13.8809 23.2468 14.0533C23.0744 14.2257 22.8406 14.3225 22.5967 14.3225ZM20.4516 18C20.4516 18.4849 20.3078 18.9588 20.0384 19.362C19.769 19.7652 19.3861 20.0794 18.9382 20.265C18.4902 20.4505 17.9972 20.4991 17.5217 20.4045C17.0461 20.3099 16.6093 20.0764 16.2664 19.7335C15.9236 19.3907 15.6901 18.9538 15.5955 18.4783C15.5009 18.0027 15.5494 17.5098 15.735 17.0618C15.9205 16.6138 16.2348 16.2309 16.6379 15.9615C17.0411 15.6921 17.5151 15.5484 18 15.5484C18.6502 15.5484 19.2738 15.8066 19.7335 16.2664C20.1933 16.7262 20.4516 17.3498 20.4516 18Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_775_363">
                                            <rect width="16" height="16" fill="white" transform="translate(10 10)"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                            <a href={'#'} className="footer__socials">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="18" fill="#40A865"/>
                                    <g clipPath="url(#clip0_775_368)">
                                        <path d="M25.9365 18C25.9365 13.619 22.3809 10.0635 18 10.0635C13.619 10.0635 10.0635 13.619 10.0635 18C10.0635 21.8413 12.7936 25.0397 16.4127 25.7778V20.3809H14.8254V18H16.4127V16.0159C16.4127 14.4841 17.6587 13.2381 19.1905 13.2381H21.1746V15.619H19.5873C19.1508 15.619 18.7936 15.9762 18.7936 16.4127V18H21.1746V20.3809H18.7936V25.8968C22.8016 25.5 25.9365 22.119 25.9365 18Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_775_368">
                                            <rect width="16" height="16" fill="white" transform="translate(10 10)"/>
                                        </clipPath>
                                    </defs>
                                </svg>


                            </a>
                            <a href={'#'} className="footer__socials">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="18" fill="#40A865"/>
                                    <g clipPath="url(#clip0_775_373)">
                                        <path d="M17.2344 10.0344C14.7344 10.2937 12.5438 11.6531 11.2126 13.7719C9.32505 16.7719 9.67818 20.7375 12.0626 23.35C13.3844 24.7969 15.0344 25.6625 17.0157 25.9437C17.3844 25.9969 18.6126 25.9937 19.0001 25.9437C20.8094 25.6937 22.4282 24.8906 23.6594 23.6344C24.0657 23.2219 24.1501 23.125 24.4188 22.7687C25.2188 21.7031 25.7407 20.4031 25.9438 18.9844C25.9969 18.6156 25.9969 17.3844 25.9438 17.0156C25.8094 16.0687 25.5626 15.2625 25.1719 14.4719C24.7532 13.6344 24.3282 13.0375 23.6626 12.3656C22.4282 11.1156 20.8844 10.3375 19.1094 10.075C18.7251 10.0187 17.6157 9.99374 17.2344 10.0344ZM19.7032 13.5844C19.7719 14.1187 19.9407 14.5281 20.2344 14.8844C20.6157 15.3469 21.1844 15.6437 21.8032 15.7062L22.0001 15.7281V16.4656V17.2031L21.7063 17.1844C21.5438 17.1719 21.3313 17.1437 21.2344 17.125C20.8094 17.0375 20.2657 16.8062 19.9001 16.5594C19.8032 16.4906 19.7157 16.4375 19.7063 16.4375C19.7001 16.4375 19.6938 17.2625 19.6969 18.2719C19.7032 20.0906 19.7032 20.1125 19.6313 20.3906C19.3719 21.4094 18.5907 22.2031 17.5782 22.4719C17.2032 22.5687 16.6594 22.5844 16.2813 22.5062C15.1532 22.275 14.2782 21.4125 14.0469 20.3094C13.9844 20.0219 13.9876 19.4656 14.0501 19.1625C14.1032 18.8969 14.2501 18.5281 14.4126 18.2594C14.5501 18.0312 14.9313 17.6219 15.1688 17.4531C15.7126 17.0687 16.4532 16.8594 17.0626 16.9219L17.2813 16.9437V17.7031V18.4625L17.1657 18.4312C17.1001 18.4125 16.9219 18.4062 16.7657 18.4125C16.4094 18.4281 16.1407 18.5469 15.8969 18.7969C15.1188 19.5875 15.5594 20.9 16.6626 21.0719C17.3813 21.1844 18.0813 20.6562 18.1876 19.9219C18.2063 19.7906 18.2188 18.4687 18.2188 16.5687V13.4375H18.9501H19.6844L19.7032 13.5844Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_775_373">
                                            <rect width="16" height="16" fill="white" transform="translate(10 10)"/>
                                        </clipPath>
                                    </defs>
                                </svg>


                            </a>
                            <a href={'https://vk.com/hitexpo'} className="footer__socials">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="18" fill="#40A865"/>
                                    <g clipPath="url(#clip0_775_379)">
                                        <path d="M18 10.0762C13.6237 10.0762 10.0762 13.6237 10.0762 18C10.0762 22.3762 13.6237 25.9238 18 25.9238C22.3762 25.9238 25.9238 22.3762 25.9238 18C25.9238 13.6237 22.3762 10.0762 18 10.0762ZM21.0473 19.016C21.0473 19.016 21.7481 19.7077 21.9206 20.0288C21.9256 20.0354 21.928 20.042 21.9297 20.0453C21.9999 20.1633 22.0164 20.255 21.9817 20.3235C21.9239 20.4374 21.7258 20.4935 21.6581 20.4985H20.42C20.3342 20.4985 20.1543 20.4762 19.9364 20.326C19.7688 20.2087 19.6037 20.0164 19.4428 19.8291C19.2026 19.5501 18.9946 19.3091 18.7849 19.3091C18.7583 19.309 18.7318 19.3132 18.7065 19.3214C18.548 19.3726 18.345 19.5988 18.345 20.2013C18.345 20.3895 18.1964 20.4976 18.0916 20.4976H17.5246C17.3314 20.4976 16.3253 20.43 15.4338 19.4898C14.3426 18.3384 13.3604 16.0289 13.3522 16.0075C13.2903 15.8581 13.4182 15.778 13.5577 15.778H14.8082C14.9749 15.778 15.0294 15.8795 15.0673 15.9695C15.1119 16.0743 15.2753 16.4912 15.5436 16.96C15.9786 17.7243 16.2452 18.0346 16.459 18.0346C16.4991 18.0342 16.5384 18.024 16.5737 18.0049C16.8527 17.8498 16.8007 16.8552 16.7883 16.6488C16.7883 16.61 16.7875 16.2039 16.6447 16.0091C16.5423 15.868 16.3682 15.8143 16.2625 15.7945C16.3053 15.7355 16.3616 15.6877 16.4268 15.655C16.6183 15.5593 16.9633 15.5453 17.3058 15.5453H17.4965C17.8679 15.5502 17.9637 15.5741 18.0982 15.608C18.3706 15.6732 18.3764 15.849 18.3524 16.4507C18.345 16.6216 18.3376 16.8147 18.3376 17.0425C18.3376 17.092 18.3351 17.1449 18.3351 17.201C18.3268 17.5072 18.3169 17.8547 18.5332 17.9975C18.5614 18.0152 18.594 18.0246 18.6273 18.0247C18.7024 18.0247 18.9286 18.0247 19.541 16.974C19.7299 16.6358 19.894 16.2844 20.0321 15.9225C20.0445 15.901 20.0808 15.835 20.1237 15.8094C20.1554 15.7932 20.1905 15.785 20.2261 15.7854H21.6961C21.8562 15.7854 21.966 15.8094 21.9866 15.8713C22.023 15.9695 21.98 16.2691 21.309 17.1779L21.0094 17.5733C20.4011 18.3706 20.4011 18.411 21.0473 19.016Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_775_379">
                                            <rect width="16" height="16" fill="white" transform="translate(10 10)"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                            <a href={'https://youtube.com/@HITEXPO'} className="footer__socials">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="18" fill="#40A865"/>
                                    <g clipPath="url(#clip0_775_383)">
                                        <path d="M15.2226 21.4238L21.1326 18.0001L15.2226 14.5763V21.4238ZM28.3863 12.4878C28.5343 13.0242 28.6368 13.7432 28.7051 14.6562C28.7848 15.5692 28.819 16.3567 28.819 17.0414L28.8873 18.0001C28.8873 20.4994 28.7051 22.3368 28.3863 23.5123C28.1016 24.5394 27.4411 25.2013 26.4163 25.4866C25.8811 25.635 24.9018 25.7377 23.3986 25.8062C21.9183 25.886 20.5632 25.9203 19.3106 25.9203L17.5 25.9888C12.7288 25.9888 9.75671 25.8062 8.58383 25.4866C7.55897 25.2013 6.89851 24.5394 6.61383 23.5123C6.4658 22.9759 6.36331 22.2569 6.29499 21.3439C6.21528 20.4309 6.18112 19.6434 6.18112 18.9587L6.11279 18.0001C6.11279 15.5007 6.29499 13.6633 6.61383 12.4878C6.89851 11.4607 7.55897 10.7988 8.58383 10.5135C9.11903 10.3651 10.0983 10.2624 11.6014 10.194C13.0818 10.1141 14.4369 10.0798 15.6895 10.0798L17.5 10.0114C22.2713 10.0114 25.2434 10.194 26.4163 10.5135C27.4411 10.7988 28.1016 11.4607 28.3863 12.4878Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_775_383">
                                            <rect width="23" height="16" fill="white" transform="translate(6 10)"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                            <a href={'#'} className="footer__socials">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="18" fill="#40A865"/>
                                    <path d="M17.2518 10.0179C14.5343 10.2807 12.1048 11.9263 10.8744 14.3416C10.4392 15.1957 10.1825 16.0185 10.0416 17.0103C9.97903 17.4483 9.98842 18.5871 10.0604 19.0752C10.1825 19.9449 10.4392 20.7677 10.8337 21.5593C11.6133 23.1298 12.8593 24.375 14.4341 25.1572C16.9856 26.4274 20.0037 26.2522 22.383 24.6973C23.3129 24.0903 24.1957 23.1893 24.7969 22.2319C25.0285 21.869 25.3729 21.1619 25.5294 20.7364C25.6891 20.3047 25.8738 19.5601 25.9396 19.0752C26.0116 18.584 26.021 17.4452 25.9584 17.0103C25.7736 15.7119 25.3604 14.6044 24.6748 13.5719C24.3867 13.1339 24.0956 12.7773 23.6886 12.3674C22.4394 11.1066 20.8865 10.3245 19.1114 10.0617C18.7295 10.0053 17.6525 9.98031 17.2518 10.0179ZM18.5197 13.0495C19.7438 13.3029 20.5985 14.4167 20.5234 15.665C20.5015 16.0561 20.442 16.2782 20.2698 16.6348C20.0225 17.1448 19.6217 17.5453 19.1114 17.7924C18.7796 17.952 18.5009 18.0239 18.1284 18.049C17.0702 18.1178 16.037 17.4483 15.6488 16.4471C14.9193 14.5668 16.5442 12.6427 18.5197 13.0495ZM15.7866 18.0615C15.8523 18.0803 16.0182 18.1647 16.1529 18.2492C16.9731 18.7686 17.953 18.9187 18.8954 18.6716C19.1991 18.5902 19.6123 18.4088 19.8252 18.2648C20.2291 17.9895 20.5077 17.9645 20.7613 18.1772C20.8772 18.2742 21.0055 18.5339 21.0055 18.6778C21.0055 18.7341 20.9867 18.8249 20.9617 18.8812C20.8678 19.1064 20.3074 19.5288 19.8565 19.7165C19.5779 19.8323 19.0144 19.9824 18.7295 20.0137C18.6199 20.0262 18.5322 20.045 18.5322 20.0544C18.5322 20.0669 18.9737 20.5174 19.5153 21.0618C20.3355 21.8846 20.5046 22.0692 20.5328 22.1725C20.5766 22.3383 20.5766 22.3696 20.5171 22.5416C20.4138 22.8482 20.0538 23.0516 19.7501 22.9703C19.6311 22.939 19.509 22.8326 18.8234 22.1506C18.1252 21.456 18.0313 21.3715 17.975 21.4028C17.9405 21.4216 17.593 21.7595 17.1985 22.1568C16.4252 22.939 16.3157 23.0203 16.0746 22.9953C15.6739 22.9484 15.3796 22.5291 15.4954 22.1693C15.5267 22.0755 15.7553 21.8252 16.5254 21.0493L17.5147 20.0513L17.1797 19.995C16.4785 19.8823 15.9462 19.6758 15.4985 19.3411C15.2074 19.1221 15.1072 19.0157 15.0446 18.8655C14.9538 18.6497 14.9976 18.4463 15.1855 18.2336C15.3545 18.0427 15.533 17.9895 15.7866 18.0615Z" fill="white"/>
                                    <path d="M17.7495 14.3037C17.427 14.3725 17.092 14.6134 16.9229 14.9075C16.7977 15.1171 16.7382 15.455 16.7758 15.7053C16.8572 16.234 17.2298 16.622 17.7526 16.7315C18.169 16.8191 18.5697 16.6939 18.8703 16.3873C19.3148 15.9368 19.3587 15.2829 18.983 14.7698C18.864 14.604 18.6135 14.4225 18.4132 14.3506C18.2347 14.2911 17.9248 14.2692 17.7495 14.3037Z" fill="white"/>
                                </svg>

                            </a>
                            <a href={'#'} className="footer__socials">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_775_396)">
                                        <circle cx="18" cy="18" r="16" fill="white"/>
                                        <path d="M16.2893 0.0451585C10.6572 0.629919 5.72201 3.69463 2.7229 8.47134C-1.52936 15.2348 -0.733816 24.1753 4.63783 30.0652C7.61582 33.3272 11.333 35.2787 15.7965 35.9128C16.6272 36.0326 19.394 36.0255 20.267 35.9128C24.3432 35.3492 27.9901 33.5385 30.7639 30.7063C31.6791 29.7763 31.8692 29.5579 32.4746 28.7548C34.2769 26.3523 35.4526 23.4215 35.9102 20.2229C36.0299 19.3916 36.0299 16.6157 35.9102 15.7844C35.6075 13.6496 35.0513 11.8319 34.1713 10.0495C33.2279 8.16135 32.2705 6.81569 30.7709 5.30095C27.9901 2.48283 24.5122 0.728553 20.5134 0.136747C19.6475 0.009932 17.1482 -0.0464304 16.2893 0.0451585ZM20.7598 7.175C27.0608 8.67565 30.6372 15.0446 28.6096 21.1458C28.0886 22.724 27.2579 24.0415 26.0047 25.3026C24.4207 26.8948 22.7099 27.8248 20.4782 28.2968C19.8657 28.4307 19.5137 28.4589 18.4366 28.4589C16.6554 28.4659 15.543 28.2334 13.9731 27.543C13.5859 27.3739 13.2198 27.233 13.1564 27.233C13.1001 27.233 11.8188 27.5641 10.3052 27.9657C8.79857 28.3602 7.55246 28.6843 7.54542 28.6773C7.53134 28.6702 7.86926 27.4162 8.28463 25.8944L9.04497 23.1185L8.71408 22.4422C7.96783 20.9274 7.63694 19.4831 7.63694 17.7218C7.64398 14.7064 8.70704 12.149 10.8332 10.0424C12.5017 8.3868 14.6137 7.35818 17.0637 6.98478C17.1834 6.97069 17.8945 6.96365 18.6478 6.97774C19.8164 6.99887 20.1332 7.02705 20.7598 7.175Z" fill="#40A865"/>
                                        <path d="M17.627 8.78858C14.1773 9.03516 11.0233 11.501 9.91798 14.8194C9.56597 15.8902 9.46741 16.5243 9.46741 17.722C9.46741 19.5468 9.81238 20.7656 10.8402 22.5551L11.0022 22.851L10.5657 24.4503C10.3263 25.3309 10.1362 26.0707 10.1573 26.0848C10.1714 26.0989 10.9177 25.9157 11.8188 25.6832L13.4592 25.2464L14.311 25.6762C15.712 26.3737 16.93 26.6696 18.4436 26.6696C22.2242 26.6696 25.6809 24.1755 26.8777 20.5683C27.2368 19.4763 27.3283 18.9197 27.3283 17.722C27.3283 16.8625 27.2931 16.475 27.1734 15.8902C26.406 12.2901 23.5759 9.52834 19.9854 8.88721C19.218 8.75335 18.507 8.72517 17.627 8.78858ZM15.4938 12.8819C15.7191 13.1355 16.6273 15.383 16.578 15.5732C16.5569 15.6577 16.3456 15.9748 16.1133 16.2848C15.881 16.5877 15.6909 16.8836 15.6909 16.947C15.6909 17.0809 16.2541 17.9193 16.6906 18.4336C17.1623 18.9902 18.0564 19.6665 18.8097 20.054C19.7601 20.5261 19.8094 20.5261 20.3515 19.8567C21.0274 19.0324 21.0907 18.9761 21.2738 19.0254C21.485 19.0888 23.4985 20.0329 23.7097 20.1667C23.8645 20.2654 23.8716 20.3076 23.8364 20.7445C23.8153 21.0051 23.7449 21.3504 23.6815 21.5124C23.5337 21.8788 22.9986 22.3719 22.4635 22.6326C22.0904 22.8158 21.9989 22.8299 21.2174 22.8299C20.436 22.8299 20.3233 22.8087 19.7038 22.5903C18.683 22.224 18.0494 21.921 17.282 21.4067C15.8036 20.4204 14.0506 18.4406 13.3325 16.94C13.0227 16.2848 12.9241 15.7916 12.9593 15.0448C12.9945 14.3473 13.1705 13.8894 13.6352 13.3117C14.0154 12.8467 14.2688 12.7269 14.8672 12.7199C15.2826 12.7199 15.3671 12.741 15.4938 12.8819Z" fill="#40A865"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_775_396">
                                            <rect width="36" height="36" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                            <a href={'#'} className="footer__socials">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="16" fill="white"/>
                                    <path d="M16.2882 0.0451561C11.7752 0.510157 7.76206 2.5322 4.67829 5.88585C0.32722 10.6134 -1.13018 17.4686 0.904547 23.6404C1.82686 26.4375 3.28426 28.7766 5.41755 30.8761C8.24786 33.6591 11.6836 35.3288 15.7953 35.9136C16.6332 36.0334 19.4001 36.0263 20.2661 35.9066C24.3919 35.3359 27.9474 33.5745 30.8058 30.6788C33.6502 27.7972 35.3188 24.3802 35.9102 20.2234C36.0299 19.392 36.0299 16.6161 35.9102 15.7847C35.5723 13.4104 34.8823 11.2686 33.8333 9.37335C33.0095 7.87267 32.052 6.59039 30.8058 5.32925C28.0037 2.48993 24.5186 0.728566 20.5125 0.136747C19.6465 0.00992876 17.1471 -0.046435 16.2882 0.0451561ZM26.4266 10.9163C26.7364 11.0502 26.8842 11.3461 26.8842 11.8393C26.8842 12.2902 23.9061 26.4375 23.7512 26.7475C23.5259 27.1843 23.0401 27.3463 22.5472 27.1631C22.3783 27.0997 20.7519 25.9231 18.3722 24.1547L17.7808 23.7179L16.5064 24.9368C15.57 25.8245 15.1617 26.1768 14.9927 26.212C14.866 26.2402 14.7463 26.2472 14.7322 26.2261C14.7111 26.205 14.7604 25.1834 14.8449 23.9434L14.9927 21.7029L15.4926 21.245C15.7601 20.9913 17.6681 19.2652 19.724 17.4052C21.7869 15.5381 23.4696 13.974 23.4696 13.9177C23.4696 13.8402 23.3921 13.812 23.2231 13.819C23.019 13.8261 21.977 14.4531 17.7526 17.1093C14.8871 18.92 12.5004 20.3995 12.4581 20.3995C12.268 20.3995 7.82542 18.9693 7.6142 18.8425C7.16361 18.5606 7.26218 18.145 7.84654 17.8138C8.00144 17.7293 9.12089 17.2713 10.3389 16.8063C11.5569 16.3343 13.8592 15.4465 15.4433 14.8336C17.0345 14.2206 19.8648 13.1286 21.7446 12.4029C25.8633 10.8106 25.8211 10.8247 26.0253 10.8177C26.1098 10.8177 26.2928 10.8599 26.4266 10.9163Z" fill="#40A865"/>
                                </svg>

                            </a>
                        </div>
                    </div>
                    <div className="footer__center">
                        <p className="footer__txt">© HIT Expo 2023 Developed by ADM group</p>
                    </div>
                </div>



                <div className="footer__right">
                    <label htmlFor="" className="footer__label">
                        Поиск по сайту
                        <div className="footer__line"/>
                    </label>
                    <label  className="footer__add">
                        <input placeholder={'Введите ключевые слова...'} type="text" className="footer__search"/>
                        <span className="div__search">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3">
<path
    d="M21 21L16.6569 16.6569M16.6569 16.6569C18.1046 15.2091 19 13.2091 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C13.2091 19 15.2091 18.1046 16.6569 16.6569Z"
    stroke="#14181F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>

                        </span>
                    </label>
                </div>
                <button className={"footer__btn"} onClick={()=>handleScrollToTop() }>
                    <svg width="48" height="48" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_2287_1073)">
                            <circle cx="34" cy="34" r="24" fill="white"/>
                        </g>
                        <path d="M33 41C33 41.5523 33.4477 42 34 42C34.5523 42 35 41.5523 35 41L33 41ZM34.7071 26.2929C34.3166 25.9024 33.6834 25.9024 33.2929 26.2929L26.9289 32.6569C26.5384 33.0474 26.5384 33.6805 26.9289 34.0711C27.3195 34.4616 27.9526 34.4616 28.3431 34.0711L34 28.4142L39.6569 34.0711C40.0474 34.4616 40.6805 34.4616 41.0711 34.0711C41.4616 33.6805 41.4616 33.0474 41.0711 32.6569L34.7071 26.2929ZM35 41L35 27L33 27L33 41L35 41Z" fill="#0033CC"/>

                    </svg>


                </button>

            </div>
        </footer>
    );
};

export default Footer;