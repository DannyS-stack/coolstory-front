import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteStory } from "../../store/user/actions";
import { selectUserHomePage } from "../../store/user/selectors";
import StoryForm from "../../components/StoryForm/";
import Card from "react-bootstrap/Card";

export default function MyPage() {
  const userPage = useSelector(selectUserHomePage);
  const dispatch = useDispatch();
  const [postStoryMode, set_postStoryMode] = useState(false);
  console.log(userPage);

  return (
    <div>
      {userPage.stories.map((s) => {
        return (
          <div>
            <p>{s.name}</p>
            <p>{s.content}</p>
            {console.log(s.id)}
            <button onClick={() => dispatch(deleteStory(s.id))}>delete</button>
          </div>
        );
      })}
      <button onClick={() => set_postStoryMode(true)}>
        Post a cool story bro
      </button>

      {postStoryMode ? (
        <Card>
          <StoryForm />
        </Card>
      ) : null}
    </div>
  );
}
