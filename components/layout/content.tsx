interface IComponentProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: IComponentProps) => {
  return (
    <>
      <div className="px-6 pt-6 2xl:container">{children}</div>
    </>
  );
};

export default ContentLayout;
