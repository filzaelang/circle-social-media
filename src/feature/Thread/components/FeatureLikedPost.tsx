// import { Text, Flex } from '@chakra-ui/react'
// import { FaHeart } from "react-icons/fa";
// import { useState } from 'react';

// interface LikesButtonProps {
//     likes: number | null;
// }

// const FeatureLikedPost: React.FC<LikesButtonProps> = ({ likes }) => {
//     const [likesCount, setLikesCount] = useState(likes);
//     const [liked, setLiked] = useState(false);

//     const updateLikesCount = () => {
//         if (liked) {
//             setLikesCount(likesCount - 1);
//         } else {
//             setLikesCount(likesCount + 1);
//         }

//         setLiked(!liked);
//     };

//     // async function

//     return (
//         <Flex alignItems={"center"} gap={0.5}>
//             <Text onClick={updateLikesCount}>
//                 <FaHeart color={liked ? "red" : "grey"} />
//             </Text>
//             <Text color="#606060" fontSize={"14px"}>{likesCount}</Text>
//         </Flex>
//     );
// }

// export default FeatureLikedPost