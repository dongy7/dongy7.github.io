import Link from 'next/prefetch';

export default ({ id, date, title }) =>
  <div className="post">
    <span className="date">{date}</span>
    <Link href={`/${new Date(date).getFullYear()}/${id}`}>
      <a>{title} </a>
    </Link>
    <style jsx>{`
      .post {
        margin-bottom: 10px;
      }

      .date {
        display: inline-block;
        width: 140px;
        text-align: right;
        margin-right: 30px;
        color: #999;
      }

      a {
        text-decoration: none;
      }

      @media (max-width: 500px) {
        .post {
          margin-bottom: 15px;
        }

        .date {
          display: block;
          width: inherit;
          text-align: inherit;
          font-size: 11px;
          color: #ccc;
          margin-bottom: 5px;
        }
      }
    `}</style>
  </div>;
