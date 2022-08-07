import { FC, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextLink } from "@mantine/next";
import {
  Avatar,
  Box,
  Divider,
  Group,
  Indicator,
  Menu,
  Autocomplete,
  ActionIcon,
} from "@mantine/core";
import { Logout, Bell, Search, Settings } from "tabler-icons-react";
import { getPath } from "src/lib/const";
import { DarkModeButton } from "src/component/DarkModeButton";
import {SearchAria } from "src/component/SearchAria";


export const Header: FC<{ left: ReactNode }> = ({ left }) => {
  return (
    <Box
      component="header"
      sx={(theme) => ({
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderBottom: `1px solid ${theme.colors.gray[2]}`,
        backgroundColor: theme.white,
      })}
    >
      <Group spacing="lg" noWrap>
        {left}
        {/* <SearchForm /> */}
        <SearchAria />
        <Notification />
        <DarkModeButton />
        <UserMenu />
      </Group>
    </Box>
  );
};

const SearchForm: FC = () => {
  return (
    <Autocomplete
      data={[]}
      size="lg"
      placeholder="Search"
      icon={<Search size={18} />}
      styles={{
        root: { flexGrow: 1 },
        input: { border: 0, backgroundColor: "transparent" },
      }}
      onChange={(value) => {
        console.log(value);
      }}
    />
  );
};

const Notification: FC = () => {
  return (
    <Indicator inline size={14} offset={4} color="red" withBorder>
      <Link href={getPath("NOTIFICATION")} passHref>
        <ActionIcon component="a" variant="hover" radius="xl" size={40}>
          <Bell />
        </ActionIcon>
      </Link>
    </Indicator>
  );
};

const UserMenu: FC = () => {
  const router = useRouter();
  const signOut = () => {
    router.push(getPath("SIGN_IN"));
  };

  return (
    <Menu
      size="lg"
      position="bottom"
      placement="end"
      transition="pop-top-right"
      control={
        <ActionIcon variant="hover" radius="xl" size={40}>
          <Avatar
            src="https://tktoplog.com/main-blog/wp-content/uploads/2021/09/dbc4aa4acbffa249faefa83e88c132bd.jpg"
            radius="xl"
          />
        </ActionIcon>
      }
      styles={(theme) => ({
        label: { fontSize: theme.fontSizes.sm },
        itemLabel: { fontSize: theme.fontSizes.md },
      })}
    >
      <Menu.Label>Application</Menu.Label>
      <Menu.Item icon={<Settings size={16} />} component={NextLink} href="#">
        メニュー1
      </Menu.Item>
      <Menu.Item icon={<Settings size={16} />} component={NextLink} href="#">
        メニュー2
      </Menu.Item>
      <Menu.Item icon={<Settings size={16} />} component={NextLink} href="#">
        メニュー3
      </Menu.Item>
      <Divider />
      <Menu.Item icon={<Logout size={16} />} onClick={signOut}>
        ログアウト
      </Menu.Item>
    </Menu>
  );
};
