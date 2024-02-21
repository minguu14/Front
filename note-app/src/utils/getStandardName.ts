// 인자로 받아온 name을 첫 글자는 대문자 나머지 글자는 소문자로 바꿔주는 함수.
const getStandardName = (name: string) => {
    return (
        name?.slice(0,1).toUpperCase() + name?.slice(1, name.length).toLocaleLowerCase()
    )
}

export default getStandardName;