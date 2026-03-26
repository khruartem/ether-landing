import type { FC } from "react";

import { QuestionListUI } from "../ui/question-list";

import type { TQuestion } from "../../utils/types";

export const QuestionList: FC = () => {
  const questions: TQuestion[] = [
    {
      title: "Question",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tempor sapien. Morbi dictum tincidunt magna at eleifend. Maecenas egestas nulla id urna feugiat, nec cursus dui feugiat. Etiam laoreet purus et hendrerit pellentesque. Quisque aliquam congue erat semper ullamcorper. Proin eget semper nibh. Aenean volutpat elit in neque rutrum condimentum. Nam nec fringilla turpis.",
    },
    {
      title: "Question",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tempor sapien. Morbi dictum tincidunt magna at eleifend. Maecenas egestas nulla id urna feugiat, nec cursus dui feugiat. Etiam laoreet purus et hendrerit pellentesque. Quisque aliquam congue erat semper ullamcorper. Proin eget semper nibh. Aenean volutpat elit in neque rutrum condimentum. Nam nec fringilla turpis.",
    },
    {
      title: "Question",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tempor sapien. Morbi dictum tincidunt magna at eleifend. Maecenas egestas nulla id urna feugiat, nec cursus dui feugiat. Etiam laoreet purus et hendrerit pellentesque. Quisque aliquam congue erat semper ullamcorper. Proin eget semper nibh. Aenean volutpat elit in neque rutrum condimentum. Nam nec fringilla turpis.",
    },
    {
      title: "Question",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tempor sapien. Morbi dictum tincidunt magna at eleifend. Maecenas egestas nulla id urna feugiat, nec cursus dui feugiat. Etiam laoreet purus et hendrerit pellentesque. Quisque aliquam congue erat semper ullamcorper. Proin eget semper nibh. Aenean volutpat elit in neque rutrum condimentum. Nam nec fringilla turpis.",
    },
    {
      title: "Question",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tempor sapien. Morbi dictum tincidunt magna at eleifend. Maecenas egestas nulla id urna feugiat, nec cursus dui feugiat. Etiam laoreet purus et hendrerit pellentesque. Quisque aliquam congue erat semper ullamcorper. Proin eget semper nibh. Aenean volutpat elit in neque rutrum condimentum. Nam nec fringilla turpis.",
    },
  ];

  return <QuestionListUI questions={questions} />;
};
