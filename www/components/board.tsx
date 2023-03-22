import * as React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";

interface BoardProps {
  children: React.ReactElement<BoardSourceProps>[];
}

interface BoardSourceProps {
  children: React.ReactElement;
  id: string;
  type: string;
  title: string;
  src?: string;
}

interface BoardResultProps {
  children: React.ReactElement;
}

function BoardSource({ children }: BoardSourceProps) {
  return <>{children}</>;
}

function BoardResult({ children }: BoardResultProps) {
  return (
    <div className="flex items-center justify-center bg-grid-dark bg-center bg-repeat p-4 dark:bg-grid-light sm:p-12">
      {children}
    </div>
  );
}

function Board({ children }: BoardProps) {
  const BoardTabList: React.ReactElement<typeof TabsTrigger>[] = [];
  const BoardTabContent: React.ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    const { id, type, title } = child.props;

    BoardTabList.push(
      <TabsTrigger value={id} key={id}>
        {title}
      </TabsTrigger>
    );

    BoardTabContent.push(
      <TabsContent value={id} key={id}>
        {type === "result" ? <BoardResult>{child}</BoardResult> : child}
      </TabsContent>
    );
  });

  return (
    <Tabs defaultValue="result">
      <TabsList>{BoardTabList}</TabsList>
      {BoardTabContent}
    </Tabs>
  );
}

export { Board, BoardSource };
