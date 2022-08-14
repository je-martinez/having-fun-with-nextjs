interface IComponentProps {
  children: React.ReactNode;
}

export const ContentLayout = ({ children }: IComponentProps) => {
  return (
    <>
      <div className="px-6 pt-6 2xl:container">{children}</div>
    </>
  );
};
