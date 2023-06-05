import React from 'react';
import "./tableSection.sass"

const TableSection = () => {
    return (
        <section className={'tableSection'}>
            <div className="container tableSection__container">
                {/*<h2 className="tableSection__h2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h2>*/}
                <table className="tableSection__table ">
                    <tbody className="tableSection__tbody">
                    <tr className="tableSection__tr">
                        <td className="tableSection__td1">Lorem Ipsum</td>
                        <td className="tableSection__td"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1945_5273)">
                                <path d="M14.5975 0.040329H5.40392C3.98205 0.04185 2.61886 0.607357 1.61345 1.61277C0.608044 2.61818 0.0425366 3.98137 0.0410156 5.40323V14.5968C0.0425366 16.0186 0.608044 17.3818 1.61345 18.3872C2.61886 19.3927 3.98205 19.9582 5.40392 19.9597H14.5975C16.0193 19.9582 17.3825 19.3927 18.3879 18.3872C19.3933 17.3818 19.9588 16.0186 19.9604 14.5968V5.40323C19.9588 3.98137 19.3933 2.61818 18.3879 1.61277C17.3825 0.607357 16.0193 0.04185 14.5975 0.040329ZM10.0007 14.5968C9.09154 14.5968 8.2028 14.3272 7.44686 13.8221C6.69093 13.317 6.10175 12.5991 5.75383 11.7591C5.40591 10.9192 5.31488 9.99491 5.49224 9.10322C5.66961 8.21153 6.10741 7.39247 6.75028 6.7496C7.39315 6.10673 8.21222 5.66893 9.10391 5.49156C9.99559 5.31419 10.9199 5.40522 11.7598 5.75314C12.5998 6.10106 13.3177 6.69024 13.8228 7.44617C14.3279 8.20211 14.5975 9.09085 14.5975 10C14.5962 11.2188 14.1115 12.3872 13.2497 13.249C12.3879 14.1108 11.2194 14.5955 10.0007 14.5968ZM15.7467 5.40323C15.5194 5.40323 15.2972 5.33583 15.1082 5.20956C14.9192 5.08328 14.7719 4.9038 14.6849 4.69382C14.598 4.48383 14.5752 4.25276 14.6195 4.02984C14.6639 3.80692 14.7733 3.60215 14.9341 3.44144C15.0948 3.28072 15.2995 3.17127 15.5225 3.12693C15.7454 3.08258 15.9764 3.10534 16.1864 3.19232C16.3964 3.2793 16.5759 3.4266 16.7022 3.61558C16.8285 3.80456 16.8959 4.02675 16.8959 4.25404C16.8959 4.55882 16.7748 4.85113 16.5593 5.06664C16.3437 5.28216 16.0514 5.40323 15.7467 5.40323ZM13.0652 10C13.0652 10.6061 12.8855 11.1986 12.5487 11.7026C12.212 12.2065 11.7334 12.5993 11.1734 12.8312C10.6135 13.0632 9.99729 13.1239 9.40283 13.0056C8.80838 12.8874 8.26233 12.5955 7.83375 12.1669C7.40517 11.7384 7.1133 11.1923 6.99506 10.5979C6.87681 10.0034 6.9375 9.38723 7.16945 8.82727C7.40139 8.2673 7.79418 7.78869 8.29814 7.45195C8.8021 7.11522 9.39459 6.93549 10.0007 6.93549C10.8135 6.93549 11.5929 7.25836 12.1676 7.83307C12.7423 8.40777 13.0652 9.18725 13.0652 10Z" fill="#3378C9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1945_5273">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                            <span className="tableSection__span">
                                Instagram
                            </span>
                        </td>
                        <td className="tableSection__td">www.cibic.info</td>
                    </tr>
                    <tr className="tableSection__tr">
                        <td className="tableSection__td1">Lorem Ipsum</td>
                        <td className="tableSection__td"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1945_5273)">
                                <path d="M14.5975 0.040329H5.40392C3.98205 0.04185 2.61886 0.607357 1.61345 1.61277C0.608044 2.61818 0.0425366 3.98137 0.0410156 5.40323V14.5968C0.0425366 16.0186 0.608044 17.3818 1.61345 18.3872C2.61886 19.3927 3.98205 19.9582 5.40392 19.9597H14.5975C16.0193 19.9582 17.3825 19.3927 18.3879 18.3872C19.3933 17.3818 19.9588 16.0186 19.9604 14.5968V5.40323C19.9588 3.98137 19.3933 2.61818 18.3879 1.61277C17.3825 0.607357 16.0193 0.04185 14.5975 0.040329ZM10.0007 14.5968C9.09154 14.5968 8.2028 14.3272 7.44686 13.8221C6.69093 13.317 6.10175 12.5991 5.75383 11.7591C5.40591 10.9192 5.31488 9.99491 5.49224 9.10322C5.66961 8.21153 6.10741 7.39247 6.75028 6.7496C7.39315 6.10673 8.21222 5.66893 9.10391 5.49156C9.99559 5.31419 10.9199 5.40522 11.7598 5.75314C12.5998 6.10106 13.3177 6.69024 13.8228 7.44617C14.3279 8.20211 14.5975 9.09085 14.5975 10C14.5962 11.2188 14.1115 12.3872 13.2497 13.249C12.3879 14.1108 11.2194 14.5955 10.0007 14.5968ZM15.7467 5.40323C15.5194 5.40323 15.2972 5.33583 15.1082 5.20956C14.9192 5.08328 14.7719 4.9038 14.6849 4.69382C14.598 4.48383 14.5752 4.25276 14.6195 4.02984C14.6639 3.80692 14.7733 3.60215 14.9341 3.44144C15.0948 3.28072 15.2995 3.17127 15.5225 3.12693C15.7454 3.08258 15.9764 3.10534 16.1864 3.19232C16.3964 3.2793 16.5759 3.4266 16.7022 3.61558C16.8285 3.80456 16.8959 4.02675 16.8959 4.25404C16.8959 4.55882 16.7748 4.85113 16.5593 5.06664C16.3437 5.28216 16.0514 5.40323 15.7467 5.40323ZM13.0652 10C13.0652 10.6061 12.8855 11.1986 12.5487 11.7026C12.212 12.2065 11.7334 12.5993 11.1734 12.8312C10.6135 13.0632 9.99729 13.1239 9.40283 13.0056C8.80838 12.8874 8.26233 12.5955 7.83375 12.1669C7.40517 11.7384 7.1133 11.1923 6.99506 10.5979C6.87681 10.0034 6.9375 9.38723 7.16945 8.82727C7.40139 8.2673 7.79418 7.78869 8.29814 7.45195C8.8021 7.11522 9.39459 6.93549 10.0007 6.93549C10.8135 6.93549 11.5929 7.25836 12.1676 7.83307C12.7423 8.40777 13.0652 9.18725 13.0652 10Z" fill="#3378C9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1945_5273">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                            <span className="tableSection__span">
                                Instagram
                            </span>
                        </td>
                        <td className="tableSection__td">www.ameca.site</td>
                    </tr>
                    <tr className="tableSection__tr">
                        <td className="tableSection__td1">Lorem Ipsum</td>
                        <td className="tableSection__td"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1945_5273)">
                                <path d="M14.5975 0.040329H5.40392C3.98205 0.04185 2.61886 0.607357 1.61345 1.61277C0.608044 2.61818 0.0425366 3.98137 0.0410156 5.40323V14.5968C0.0425366 16.0186 0.608044 17.3818 1.61345 18.3872C2.61886 19.3927 3.98205 19.9582 5.40392 19.9597H14.5975C16.0193 19.9582 17.3825 19.3927 18.3879 18.3872C19.3933 17.3818 19.9588 16.0186 19.9604 14.5968V5.40323C19.9588 3.98137 19.3933 2.61818 18.3879 1.61277C17.3825 0.607357 16.0193 0.04185 14.5975 0.040329ZM10.0007 14.5968C9.09154 14.5968 8.2028 14.3272 7.44686 13.8221C6.69093 13.317 6.10175 12.5991 5.75383 11.7591C5.40591 10.9192 5.31488 9.99491 5.49224 9.10322C5.66961 8.21153 6.10741 7.39247 6.75028 6.7496C7.39315 6.10673 8.21222 5.66893 9.10391 5.49156C9.99559 5.31419 10.9199 5.40522 11.7598 5.75314C12.5998 6.10106 13.3177 6.69024 13.8228 7.44617C14.3279 8.20211 14.5975 9.09085 14.5975 10C14.5962 11.2188 14.1115 12.3872 13.2497 13.249C12.3879 14.1108 11.2194 14.5955 10.0007 14.5968ZM15.7467 5.40323C15.5194 5.40323 15.2972 5.33583 15.1082 5.20956C14.9192 5.08328 14.7719 4.9038 14.6849 4.69382C14.598 4.48383 14.5752 4.25276 14.6195 4.02984C14.6639 3.80692 14.7733 3.60215 14.9341 3.44144C15.0948 3.28072 15.2995 3.17127 15.5225 3.12693C15.7454 3.08258 15.9764 3.10534 16.1864 3.19232C16.3964 3.2793 16.5759 3.4266 16.7022 3.61558C16.8285 3.80456 16.8959 4.02675 16.8959 4.25404C16.8959 4.55882 16.7748 4.85113 16.5593 5.06664C16.3437 5.28216 16.0514 5.40323 15.7467 5.40323ZM13.0652 10C13.0652 10.6061 12.8855 11.1986 12.5487 11.7026C12.212 12.2065 11.7334 12.5993 11.1734 12.8312C10.6135 13.0632 9.99729 13.1239 9.40283 13.0056C8.80838 12.8874 8.26233 12.5955 7.83375 12.1669C7.40517 11.7384 7.1133 11.1923 6.99506 10.5979C6.87681 10.0034 6.9375 9.38723 7.16945 8.82727C7.40139 8.2673 7.79418 7.78869 8.29814 7.45195C8.8021 7.11522 9.39459 6.93549 10.0007 6.93549C10.8135 6.93549 11.5929 7.25836 12.1676 7.83307C12.7423 8.40777 13.0652 9.18725 13.0652 10Z" fill="#3378C9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1945_5273">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                            <span className="tableSection__span">
                                Instagram
                            </span>
                        </td>
                        <td className="tableSection__td">www.idfca.info</td>
                    </tr>
                    <tr className="tableSection__tr">
                        <td className="tableSection__td1">Lorem Ipsum</td>
                        <td className="tableSection__td"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1945_5273)">
                                <path d="M14.5975 0.040329H5.40392C3.98205 0.04185 2.61886 0.607357 1.61345 1.61277C0.608044 2.61818 0.0425366 3.98137 0.0410156 5.40323V14.5968C0.0425366 16.0186 0.608044 17.3818 1.61345 18.3872C2.61886 19.3927 3.98205 19.9582 5.40392 19.9597H14.5975C16.0193 19.9582 17.3825 19.3927 18.3879 18.3872C19.3933 17.3818 19.9588 16.0186 19.9604 14.5968V5.40323C19.9588 3.98137 19.3933 2.61818 18.3879 1.61277C17.3825 0.607357 16.0193 0.04185 14.5975 0.040329ZM10.0007 14.5968C9.09154 14.5968 8.2028 14.3272 7.44686 13.8221C6.69093 13.317 6.10175 12.5991 5.75383 11.7591C5.40591 10.9192 5.31488 9.99491 5.49224 9.10322C5.66961 8.21153 6.10741 7.39247 6.75028 6.7496C7.39315 6.10673 8.21222 5.66893 9.10391 5.49156C9.99559 5.31419 10.9199 5.40522 11.7598 5.75314C12.5998 6.10106 13.3177 6.69024 13.8228 7.44617C14.3279 8.20211 14.5975 9.09085 14.5975 10C14.5962 11.2188 14.1115 12.3872 13.2497 13.249C12.3879 14.1108 11.2194 14.5955 10.0007 14.5968ZM15.7467 5.40323C15.5194 5.40323 15.2972 5.33583 15.1082 5.20956C14.9192 5.08328 14.7719 4.9038 14.6849 4.69382C14.598 4.48383 14.5752 4.25276 14.6195 4.02984C14.6639 3.80692 14.7733 3.60215 14.9341 3.44144C15.0948 3.28072 15.2995 3.17127 15.5225 3.12693C15.7454 3.08258 15.9764 3.10534 16.1864 3.19232C16.3964 3.2793 16.5759 3.4266 16.7022 3.61558C16.8285 3.80456 16.8959 4.02675 16.8959 4.25404C16.8959 4.55882 16.7748 4.85113 16.5593 5.06664C16.3437 5.28216 16.0514 5.40323 15.7467 5.40323ZM13.0652 10C13.0652 10.6061 12.8855 11.1986 12.5487 11.7026C12.212 12.2065 11.7334 12.5993 11.1734 12.8312C10.6135 13.0632 9.99729 13.1239 9.40283 13.0056C8.80838 12.8874 8.26233 12.5955 7.83375 12.1669C7.40517 11.7384 7.1133 11.1923 6.99506 10.5979C6.87681 10.0034 6.9375 9.38723 7.16945 8.82727C7.40139 8.2673 7.79418 7.78869 8.29814 7.45195C8.8021 7.11522 9.39459 6.93549 10.0007 6.93549C10.8135 6.93549 11.5929 7.25836 12.1676 7.83307C12.7423 8.40777 13.0652 9.18725 13.0652 10Z" fill="#3378C9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1945_5273">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                            <span className="tableSection__span">
                                Instagram
                            </span>
                        </td>
                        <td className="tableSection__td"></td>
                    </tr>
                    <tr className="tableSection__tr">
                        <td className="tableSection__td1">Lorem Ipsum</td>
                        <td className="tableSection__td"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1945_5273)">
                                <path d="M14.5975 0.040329H5.40392C3.98205 0.04185 2.61886 0.607357 1.61345 1.61277C0.608044 2.61818 0.0425366 3.98137 0.0410156 5.40323V14.5968C0.0425366 16.0186 0.608044 17.3818 1.61345 18.3872C2.61886 19.3927 3.98205 19.9582 5.40392 19.9597H14.5975C16.0193 19.9582 17.3825 19.3927 18.3879 18.3872C19.3933 17.3818 19.9588 16.0186 19.9604 14.5968V5.40323C19.9588 3.98137 19.3933 2.61818 18.3879 1.61277C17.3825 0.607357 16.0193 0.04185 14.5975 0.040329ZM10.0007 14.5968C9.09154 14.5968 8.2028 14.3272 7.44686 13.8221C6.69093 13.317 6.10175 12.5991 5.75383 11.7591C5.40591 10.9192 5.31488 9.99491 5.49224 9.10322C5.66961 8.21153 6.10741 7.39247 6.75028 6.7496C7.39315 6.10673 8.21222 5.66893 9.10391 5.49156C9.99559 5.31419 10.9199 5.40522 11.7598 5.75314C12.5998 6.10106 13.3177 6.69024 13.8228 7.44617C14.3279 8.20211 14.5975 9.09085 14.5975 10C14.5962 11.2188 14.1115 12.3872 13.2497 13.249C12.3879 14.1108 11.2194 14.5955 10.0007 14.5968ZM15.7467 5.40323C15.5194 5.40323 15.2972 5.33583 15.1082 5.20956C14.9192 5.08328 14.7719 4.9038 14.6849 4.69382C14.598 4.48383 14.5752 4.25276 14.6195 4.02984C14.6639 3.80692 14.7733 3.60215 14.9341 3.44144C15.0948 3.28072 15.2995 3.17127 15.5225 3.12693C15.7454 3.08258 15.9764 3.10534 16.1864 3.19232C16.3964 3.2793 16.5759 3.4266 16.7022 3.61558C16.8285 3.80456 16.8959 4.02675 16.8959 4.25404C16.8959 4.55882 16.7748 4.85113 16.5593 5.06664C16.3437 5.28216 16.0514 5.40323 15.7467 5.40323ZM13.0652 10C13.0652 10.6061 12.8855 11.1986 12.5487 11.7026C12.212 12.2065 11.7334 12.5993 11.1734 12.8312C10.6135 13.0632 9.99729 13.1239 9.40283 13.0056C8.80838 12.8874 8.26233 12.5955 7.83375 12.1669C7.40517 11.7384 7.1133 11.1923 6.99506 10.5979C6.87681 10.0034 6.9375 9.38723 7.16945 8.82727C7.40139 8.2673 7.79418 7.78869 8.29814 7.45195C8.8021 7.11522 9.39459 6.93549 10.0007 6.93549C10.8135 6.93549 11.5929 7.25836 12.1676 7.83307C12.7423 8.40777 13.0652 9.18725 13.0652 10Z" fill="#3378C9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1945_5273">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                            <span className="tableSection__span">
                                Instagram
                            </span>
                        </td>
                        <td className="tableSection__td"></td>
                    </tr>
                    <tr className="tableSection__tr">
                        <td className="tableSection__td1">Lorem Ipsum</td>
                        <td className="tableSection__td"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1945_5273)">
                                <path d="M14.5975 0.040329H5.40392C3.98205 0.04185 2.61886 0.607357 1.61345 1.61277C0.608044 2.61818 0.0425366 3.98137 0.0410156 5.40323V14.5968C0.0425366 16.0186 0.608044 17.3818 1.61345 18.3872C2.61886 19.3927 3.98205 19.9582 5.40392 19.9597H14.5975C16.0193 19.9582 17.3825 19.3927 18.3879 18.3872C19.3933 17.3818 19.9588 16.0186 19.9604 14.5968V5.40323C19.9588 3.98137 19.3933 2.61818 18.3879 1.61277C17.3825 0.607357 16.0193 0.04185 14.5975 0.040329ZM10.0007 14.5968C9.09154 14.5968 8.2028 14.3272 7.44686 13.8221C6.69093 13.317 6.10175 12.5991 5.75383 11.7591C5.40591 10.9192 5.31488 9.99491 5.49224 9.10322C5.66961 8.21153 6.10741 7.39247 6.75028 6.7496C7.39315 6.10673 8.21222 5.66893 9.10391 5.49156C9.99559 5.31419 10.9199 5.40522 11.7598 5.75314C12.5998 6.10106 13.3177 6.69024 13.8228 7.44617C14.3279 8.20211 14.5975 9.09085 14.5975 10C14.5962 11.2188 14.1115 12.3872 13.2497 13.249C12.3879 14.1108 11.2194 14.5955 10.0007 14.5968ZM15.7467 5.40323C15.5194 5.40323 15.2972 5.33583 15.1082 5.20956C14.9192 5.08328 14.7719 4.9038 14.6849 4.69382C14.598 4.48383 14.5752 4.25276 14.6195 4.02984C14.6639 3.80692 14.7733 3.60215 14.9341 3.44144C15.0948 3.28072 15.2995 3.17127 15.5225 3.12693C15.7454 3.08258 15.9764 3.10534 16.1864 3.19232C16.3964 3.2793 16.5759 3.4266 16.7022 3.61558C16.8285 3.80456 16.8959 4.02675 16.8959 4.25404C16.8959 4.55882 16.7748 4.85113 16.5593 5.06664C16.3437 5.28216 16.0514 5.40323 15.7467 5.40323ZM13.0652 10C13.0652 10.6061 12.8855 11.1986 12.5487 11.7026C12.212 12.2065 11.7334 12.5993 11.1734 12.8312C10.6135 13.0632 9.99729 13.1239 9.40283 13.0056C8.80838 12.8874 8.26233 12.5955 7.83375 12.1669C7.40517 11.7384 7.1133 11.1923 6.99506 10.5979C6.87681 10.0034 6.9375 9.38723 7.16945 8.82727C7.40139 8.2673 7.79418 7.78869 8.29814 7.45195C8.8021 7.11522 9.39459 6.93549 10.0007 6.93549C10.8135 6.93549 11.5929 7.25836 12.1676 7.83307C12.7423 8.40777 13.0652 9.18725 13.0652 10Z" fill="#3378C9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1945_5273">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                            <span className="tableSection__span">
                                Instagram
                            </span>
                        </td>
                        <td className="tableSection__td">www.itcsmart.com</td>
                    </tr>
                    <tr className="tableSection__tr">
                        <td className="tableSection__td1">Lorem Ipsum</td>
                        <td className="tableSection__td"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1945_5273)">
                                <path d="M14.5975 0.040329H5.40392C3.98205 0.04185 2.61886 0.607357 1.61345 1.61277C0.608044 2.61818 0.0425366 3.98137 0.0410156 5.40323V14.5968C0.0425366 16.0186 0.608044 17.3818 1.61345 18.3872C2.61886 19.3927 3.98205 19.9582 5.40392 19.9597H14.5975C16.0193 19.9582 17.3825 19.3927 18.3879 18.3872C19.3933 17.3818 19.9588 16.0186 19.9604 14.5968V5.40323C19.9588 3.98137 19.3933 2.61818 18.3879 1.61277C17.3825 0.607357 16.0193 0.04185 14.5975 0.040329ZM10.0007 14.5968C9.09154 14.5968 8.2028 14.3272 7.44686 13.8221C6.69093 13.317 6.10175 12.5991 5.75383 11.7591C5.40591 10.9192 5.31488 9.99491 5.49224 9.10322C5.66961 8.21153 6.10741 7.39247 6.75028 6.7496C7.39315 6.10673 8.21222 5.66893 9.10391 5.49156C9.99559 5.31419 10.9199 5.40522 11.7598 5.75314C12.5998 6.10106 13.3177 6.69024 13.8228 7.44617C14.3279 8.20211 14.5975 9.09085 14.5975 10C14.5962 11.2188 14.1115 12.3872 13.2497 13.249C12.3879 14.1108 11.2194 14.5955 10.0007 14.5968ZM15.7467 5.40323C15.5194 5.40323 15.2972 5.33583 15.1082 5.20956C14.9192 5.08328 14.7719 4.9038 14.6849 4.69382C14.598 4.48383 14.5752 4.25276 14.6195 4.02984C14.6639 3.80692 14.7733 3.60215 14.9341 3.44144C15.0948 3.28072 15.2995 3.17127 15.5225 3.12693C15.7454 3.08258 15.9764 3.10534 16.1864 3.19232C16.3964 3.2793 16.5759 3.4266 16.7022 3.61558C16.8285 3.80456 16.8959 4.02675 16.8959 4.25404C16.8959 4.55882 16.7748 4.85113 16.5593 5.06664C16.3437 5.28216 16.0514 5.40323 15.7467 5.40323ZM13.0652 10C13.0652 10.6061 12.8855 11.1986 12.5487 11.7026C12.212 12.2065 11.7334 12.5993 11.1734 12.8312C10.6135 13.0632 9.99729 13.1239 9.40283 13.0056C8.80838 12.8874 8.26233 12.5955 7.83375 12.1669C7.40517 11.7384 7.1133 11.1923 6.99506 10.5979C6.87681 10.0034 6.9375 9.38723 7.16945 8.82727C7.40139 8.2673 7.79418 7.78869 8.29814 7.45195C8.8021 7.11522 9.39459 6.93549 10.0007 6.93549C10.8135 6.93549 11.5929 7.25836 12.1676 7.83307C12.7423 8.40777 13.0652 9.18725 13.0652 10Z" fill="#3378C9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1945_5273">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                            <span className="tableSection__span">
                                Instagram
                            </span>
                        </td>
                        <td className="tableSection__td">www.odadmiral.com</td>
                    </tr>
                    <tr className="tableSection__tr">
                        <td className="tableSection__td1">Lorem Ipsum</td>
                        <td className="tableSection__td"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1945_5273)">
                                <path d="M14.5975 0.040329H5.40392C3.98205 0.04185 2.61886 0.607357 1.61345 1.61277C0.608044 2.61818 0.0425366 3.98137 0.0410156 5.40323V14.5968C0.0425366 16.0186 0.608044 17.3818 1.61345 18.3872C2.61886 19.3927 3.98205 19.9582 5.40392 19.9597H14.5975C16.0193 19.9582 17.3825 19.3927 18.3879 18.3872C19.3933 17.3818 19.9588 16.0186 19.9604 14.5968V5.40323C19.9588 3.98137 19.3933 2.61818 18.3879 1.61277C17.3825 0.607357 16.0193 0.04185 14.5975 0.040329ZM10.0007 14.5968C9.09154 14.5968 8.2028 14.3272 7.44686 13.8221C6.69093 13.317 6.10175 12.5991 5.75383 11.7591C5.40591 10.9192 5.31488 9.99491 5.49224 9.10322C5.66961 8.21153 6.10741 7.39247 6.75028 6.7496C7.39315 6.10673 8.21222 5.66893 9.10391 5.49156C9.99559 5.31419 10.9199 5.40522 11.7598 5.75314C12.5998 6.10106 13.3177 6.69024 13.8228 7.44617C14.3279 8.20211 14.5975 9.09085 14.5975 10C14.5962 11.2188 14.1115 12.3872 13.2497 13.249C12.3879 14.1108 11.2194 14.5955 10.0007 14.5968ZM15.7467 5.40323C15.5194 5.40323 15.2972 5.33583 15.1082 5.20956C14.9192 5.08328 14.7719 4.9038 14.6849 4.69382C14.598 4.48383 14.5752 4.25276 14.6195 4.02984C14.6639 3.80692 14.7733 3.60215 14.9341 3.44144C15.0948 3.28072 15.2995 3.17127 15.5225 3.12693C15.7454 3.08258 15.9764 3.10534 16.1864 3.19232C16.3964 3.2793 16.5759 3.4266 16.7022 3.61558C16.8285 3.80456 16.8959 4.02675 16.8959 4.25404C16.8959 4.55882 16.7748 4.85113 16.5593 5.06664C16.3437 5.28216 16.0514 5.40323 15.7467 5.40323ZM13.0652 10C13.0652 10.6061 12.8855 11.1986 12.5487 11.7026C12.212 12.2065 11.7334 12.5993 11.1734 12.8312C10.6135 13.0632 9.99729 13.1239 9.40283 13.0056C8.80838 12.8874 8.26233 12.5955 7.83375 12.1669C7.40517 11.7384 7.1133 11.1923 6.99506 10.5979C6.87681 10.0034 6.9375 9.38723 7.16945 8.82727C7.40139 8.2673 7.79418 7.78869 8.29814 7.45195C8.8021 7.11522 9.39459 6.93549 10.0007 6.93549C10.8135 6.93549 11.5929 7.25836 12.1676 7.83307C12.7423 8.40777 13.0652 9.18725 13.0652 10Z" fill="#3378C9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1945_5273">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                            <span className="tableSection__span">
                                Instagram
                            </span>
                        </td>
                        <td className="tableSection__td">www.city312.kg</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TableSection;