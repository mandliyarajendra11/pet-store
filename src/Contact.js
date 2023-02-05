import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">contact us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3733110.8978665643!2d78.42296105!3d23.9740114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shi!2sin!4v1675595489208!5m2!1shi!2sin"
          width="100%"
          height="400"
          style={{border:"0"}}
          allowFullScreen=""
          loading="lazy"
          title="google map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    <div className="container">
      <div className="contact-form">
      <form action="https://formspree.io/f/xyyakrkv" method="post" className="contact-inputs">
      <input type="text" name="username" placeholder="name" required autoComplete="off"/>
      <input type="email" autoComplete="off" name="email" placeholder="email" required/>
      <textarea name="message" cols="30" rows="10" required autoComplete="off" placeholder="enter message"></textarea>
      <input type="submit" />
      </form>
      </div>
    </div>
    </Wrapper>
  );
};

export default Contact;
