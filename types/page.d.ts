import type { NextRequest } from "next/server";
import type { ReactNode } from "react";
import type { InfiniteItems, LayoutProps, PageProps } from "./props";

export type PageComponent = (props: PageProps) => Promise<ReactNode> | ReactNode;
export type LayoutComponent = (props: LayoutProps) => Promise<ReactNode> | ReactNode;

export type RouteHandler<T = Response> = (request: NextRequest, context: { params: InfiniteItems }) => Promise<T> | T;
export type AsyncFC<P = {}> = (props: P) => Promise<ReactNode>;
