/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Link from 'next/link'; 
import { Card, Skeleton, Modal, Space } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./movieCard.scss";

export default function movieCard(props) {
  const [showModal, setShowModal] = useState(false);
  const { movie, loading } = props;
  const poster =
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie?.poster_path;

  const cardContent = (
    <Skeleton loading={loading} avatar active>
      <Space align="start">
        <Link href={`/movie/${movie.id}`}>
          <img
            className="movie-poster"
            src={poster}
            alt="poster"
          />
        </Link>
        <span className="mock-block">
          <Link className="cursor-pointer" href="/movie/[id]" as={`/movie/${movie.id}`}>
            <h2>{movie.title} ({movie.release_date.substring(0, 4)})</h2>
          </Link>
          <p>{movie.overview}</p>
        </span>
      </Space>
    </Skeleton>
  )

  const modal = (
    <Modal
      centered
      bodyStyle={{padding: 0}}
      width={"auto"}
      visible={showModal}
      footer={null}
      onOk={() => setShowModal(false)}
      onCancel={() => setShowModal(false)}
    >
      <img src={poster} alt="poster" />
    </Modal>
  )

  return (
    <div>
      <Card
        style={{ marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        {cardContent}
      </Card>
      {modal}
    </div>
  );
}
