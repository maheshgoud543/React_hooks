//Create a "like" button using useState. When the button is clicked, the like count should increase by 1.
//Add a reset button to set the count back to 0.

import { useState } from "react";

const Likes = () => {
  const [likes, setLikes] = useState(0);
  const handleLikes = () => {
    if (likes >= 0) setLikes(likes + 1);
  };
  const handleReset = () => {
    setLikes(0);
  };
  return (
    <div>
      <p>Likes:{likes}</p>
      <button onClick={handleLikes}>Like the Post</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Likes;
