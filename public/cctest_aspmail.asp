<%
  Set oCdoMail = Server.CreateObject("CDO.Message")
  Set oCdoConf = Server.CreateObject("CDO.Configuration")
  sConfURL = "http://schemas.microsoft.com/cdo/configuration/"
  with oCdoConf
    .Fields.Item(sConfURL & "sendusing") = 2
    .Fields.Item(sConfURL & "smtpserver") = "smtp.core.com"
    .Fields.Item(sConfURL & "smtpserverport") = 25
    .Fields.Update
  end with
  with oCdoMail
    .From = "test@localnet.com"
    .To = "localnettest@gmail.com"
    .Subject = "ASP CDOSYS Test Message"
    .TextBody = "Message Body"
  end with
  oCdoMail.Configuration = oCdoConf
  oCdoMail.Send
  Set oCdoConf = Nothing
  Set oCdoMail = Nothing
%>
